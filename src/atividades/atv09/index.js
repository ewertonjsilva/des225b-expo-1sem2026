// file: des225b-expo-1sem2026/src/atividades/atv09/index.js

import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

function Square({ value, onSquareClick }) {
    return (
        <TouchableOpacity style={styles.square} onPress={onSquareClick}>
            <Text style={styles.mensagem}>{value}</Text>
        </TouchableOpacity>
    );
}

function Board({ xIsNext, squares, onPlay, playerXName, playerOName }) {

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);
    
    let status;
    if (winner) {
        status = 'Vencedor: ' + (winner === 'X' ? playerXName : playerOName);
    } else if (isDraw) {
        status = 'Empate!';
    } else {
        status = 'Próximo: ' + (xIsNext ? playerXName : playerOName);
    }

    return (
        <>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </View>
            <View style={styles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </View>
        </>
    );
}

function Atividade09() {
    // Estados de navegação e configuração
    const [gameState, setGameState] = useState('START_SCREEN'); // START_SCREEN ou PLAYING
    const [isVsCpu, setIsVsCpu] = useState(false);
    const [inputX, setInputX] = useState('');
    const [inputO, setInputO] = useState('');

    // Nomes oficiais da partida atual
    const [playerXName, setPlayerXName] = useState('Jogador X');
    const [playerOName, setPlayerOName] = useState('Jogador O');

    // Estados do tabuleiro e histórico
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    // Estados do Placar Atual
    const [scores, setScores] = useState({ winsX: 0, winsO: 0, draws: 0, totalMatches: 0 });
    
    // Estado do Recorde Global (Maior sequência de vitórias consecutivas de um único jogador)
    const [streakRecord, setStreakRecord] = useState({
        count: 0,
        player: 'Nenhum',
        vsCpu: 'Não',
    });

    // Controladores de sequência da sessão atual de partidas
    const [currentStreakPlayer, setCurrentStreakPlayer] = useState(null);
    const [currentStreakCount, setCurrentStreakCount] = useState(0);

    // Efeito para gerenciar a jogada aleatória da Máquina (Inimigo joga como 'O')
    useEffect(() => {
        if (gameState !== 'PLAYING' || !isVsCpu || xIsNext) return;

        const winner = calculateWinner(currentSquares);
        const isDraw = !winner && currentSquares.every(square => square !== null);
        if (winner || isDraw) return;

        // Filtra os índices vazios disponíveis
        const emptyIndices = currentSquares
            .map((square, index) => (square === null ? index : null))
            .filter(val => val !== null);

        if (emptyIndices.length > 0) {
            const timer = setTimeout(() => {
                const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
                const nextSquares = currentSquares.slice();
                nextSquares[randomIndex] = 'O';
                handlePlay(nextSquares);
            }, 2000); // Pequeno delay para simular o "pensamento" da máquina

            return () => clearTimeout(timer);
        }
    }, [currentMove, gameState, isVsCpu, xIsNext]);

    // Trata a finalização do jogo e atualização de estatísticas
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        const nextMove = nextHistory.length - 1;
        setCurrentMove(nextMove);

        const winner = calculateWinner(nextSquares);
        const isDraw = !winner && nextSquares.every(square => square !== null);

        if (winner) {
            const winnerName = winner === 'X' ? playerXName : playerOName;
            
            // Atualiza placar de vitórias
            setScores(prev => ({
                ...prev,
                winsX: winner === 'X' ? prev.winsX + 1 : prev.winsX,
                winsO: winner === 'O' ? prev.winsO + 1 : prev.winsO,
                totalMatches: prev.totalMatches + 1
            }));

            // Lógica de sequência de vitórias contínuas
            let newStreak = 1;
            if (currentStreakPlayer === winnerName) {
                newStreak = currentStreakCount + 1;
            }
            setCurrentStreakPlayer(winnerName);
            setCurrentStreakCount(newStreak);

            // Verifica se quebrou o recorde geral da tela inicial
            if (newStreak > streakRecord.count) {
                setStreakRecord({
                    count: newStreak,
                    player: winnerName,
                    vsCpu: isVsCpu ? 'Sim' : 'Não'
                });
            }

        } else if (isDraw) {
            setScores(prev => ({ ...prev, draws: prev.draws + 1, totalMatches: prev.totalMatches + 1 }));
            // Empate quebra a sequência atual de vitórias consecutivas
            setCurrentStreakPlayer(null);
            setCurrentStreakCount(0);
        }
    }

    function jumpTo(nextMove) {
        if (nextMove === 0) {
            setHistory([Array(9).fill(null)]);
        }
        setCurrentMove(nextMove);
    }

    function startGame(vsCpuMode) {
        setIsVsCpu(vsCpuMode);
        
        const nameX = inputX.trim() ? inputX.trim() : 'Jogador X';
        const nameO = vsCpuMode ? 'Adversário' : (inputO.trim() ? inputO.trim() : 'Jogador O');

        setPlayerXName(nameX);
        setPlayerOName(nameO);

        // Reseta o tabuleiro e o placar do confronto atual
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
        setScores({ winsX: 0, winsO: 0, draws: 0, totalMatches: 0 });
        setCurrentStreakPlayer(null);
        setCurrentStreakCount(0);

        setGameState('PLAYING');
    }

    function resetToHome() {
        setGameState('START_SCREEN');
        setInputX('');
        setInputO('');
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Volte para o movimento #' + move;
        } else {
            description = 'Reiniciar esta partida';
        }
        return (
            <TouchableOpacity
                onPress={() => jumpTo(move)}
                key={move}
                style={move === 0 ? styles.btnReiniciar : null}
            >
                <Text style={[styles.historico, move === 0 ? { color: '#fff' } : null]}>
                    {description}
                </Text>
            </TouchableOpacity>
        );
    });

    // RENDERIZAÇÃO DA TELA INICIAL
    if (gameState === 'START_SCREEN') {
        return (
            <View style={[styles.game, { padding: 20, justifyContent: 'center' }]}>
                <Text style={[styles.status, { textAlign: 'center', fontWeight: 'bold' }]}>Jogo da Velha</Text>
                
                {/* Painel de Recorde Global */}
                <View style={{ backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' }}>
                        🏆 Maior Sequência de Vitórias
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        Jogador: <Text style={{ fontWeight: 'bold' }}>{streakRecord.player}</Text>
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        Sequência: <Text style={{ fontWeight: 'bold' }}>{streakRecord.count} vitórias</Text>
                    </Text>
                    <Text style={{ fontSize: 14, textAlign: 'center' }}>
                        Contra Máquina: <Text style={{ fontWeight: 'bold' }}>{streakRecord.vsCpu}</Text>
                    </Text>
                </View>

                {/* Inputs de Nomes dos Jogadores */}
                <Text style={{ fontSize: 16, marginBottom: 5 }}>Nome do Jogador X:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Ewerton"
                    value={inputX}
                    onChangeText={setInputX}
                />

                <Text style={{ fontSize: 16, marginBottom: 5 }}>Nome do Jogador O (Ignorado no modo Máquina):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Professor 2"
                    value={inputO}
                    onChangeText={setInputO}
                />

                {/* Botões de Inicialização */}
                <TouchableOpacity style={[styles.btnReiniciar, { backgroundColor: '#2196F3' }]} onPress={() => startGame(false)}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Jogar Local (PVP)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btnReiniciar, { backgroundColor: '#4CAF50' }]} onPress={() => startGame(true)}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Jogar Contra a Máquina</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // RENDERIZAÇÃO DA TELA DO JOGO EM ANDAMENTO
    return (
        <View style={styles.game}>
            {/* Placar Superior */}
            <View style={{ backgroundColor: '#e9e9e9', padding: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{playerXName}: {scores.winsX}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Empates: {scores.draws}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{playerOName}: {scores.winsO}</Text>
                <Text style={{ fontSize: 12, color: '#666' }}>Partidas: {scores.totalMatches}</Text>
            </View>

            <View style={[styles.gameBoard, { marginTop: 20 }]}>
                <Board 
                    xIsNext={xIsNext} 
                    squares={currentSquares} 
                    onPlay={handlePlay} 
                    playerXName={playerXName}
                    playerOName={playerOName}
                />
            </View>

            <View style={styles.containerHistorico}>
                {moves}
                
                {/* Botão de Retorno */}
                <TouchableOpacity 
                    style={[styles.btnReiniciar, { backgroundColor: '#f44336', marginTop: 20 }]} 
                    onPress={resetToHome}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Voltar para Tela Inicial</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Atividade09;