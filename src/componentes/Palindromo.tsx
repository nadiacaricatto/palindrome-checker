import { useState } from 'react'
import './Palindromo.css'

function Palindromo() {
// Definindo Estados: 
  const [palavra, setPalavra] = useState<string>('')
  
  const [resultado, setResultado] = useState<string>('')
  
  const [ePalindromo, setEPalindromo] = useState<boolean | null>(null)
  
//Interação com usuário: criação de lista de palíndromos para exibir:
  const listaPalindromos = ['ovo', 'asa', 'osso', '22', 'arara', 'ana', '33', 'sopapos', 'socorram', '101', 'mirim', 'reviver', '303',
    'ele', 'ama', 'lua azul', 'Anotaram a data da maratona', 'A mala nada na lama', 'salas a salas',
    'A diva em Argel alegra-me a vida', '151', 'Roma é amor', '1234321', '10101'
  ]
  
  // Mensagens fixas na página:   
  const titulo = 'EXPLORANDO PALÍNDROMOS'
  const subtitulo = 'Palíndromos são palavras, números ou frases que permanecem iguais quando lidas de trás para frente!'
  const texto = 'Digite algo na caixinha e descubra se é um palíndromo!'
  
  // Criando a função para verificar se a palavra é ou não um palíndromo:
  function verificaPalindromo() {
// 1 - Limpando a palavra (toLowerCase para dessensibilizar minúsculas/maiúsculas + replace pra tirar os espaços):
    const palavraLimpa = palavra.toLowerCase().replace(/\s/g, '')
 //2 - Organizando o resultado - Lógica: separa a palavra, reverte e junta:   
    const palavraInvertida = palavraLimpa.split('').reverse().join('')
//3 - Resultados:    
    if (palavraLimpa === palavraInvertida) {
      setResultado("Você encontrou um Palíndromo!")
      setEPalindromo(true)
    } else {
      setResultado("Ops... Não é um palíndromo! Tente de novo!")
      setEPalindromo(false)
    }
  }
//Criando a função para gerar palíndromos aletórios a partir de um array:
  function geradorPalindromo() {
//1 - Gerar nº aleatório entre 0 e 1 > Multiplicar pelo tamanho do array > Arredondar p/ baixo: 
    const indice = Math.floor(Math.random() * listaPalindromos.length)
// 2 - Usar o número obtido no passo 1 como índice:    
    const pAleatorio = listaPalindromos[indice]
    setPalavra(pAleatorio)
    setResultado('')
    setEPalindromo(null)
  }
  
  return (
    <div className="palindromo-container">
      <h1 className='titulo-principal'>{titulo}</h1>
      <p className='subtitulo'>{subtitulo}</p>
      <p className='texto-explicativo'>{texto}</p>
      
      <div className="card-palindromo">
{/* Botão p/ Gerar Palíndromo */}
        <button className="btn-gerador" onClick={geradorPalindromo}>
          🎲 Gerar Palíndromo Aleatório
        </button>
        
        <input 
          type="text"
          value={palavra}
          onChange={(e) => setPalavra(e.target.value)}
          placeholder="Digite uma palavra..."
        />
{/* Botão p/ verificar a condição (palíndromo ou não) */}    
        <button className="btn-verificar" onClick={verificaPalindromo}>
          ✨ Verificar
        </button>
        
{/* Resultado */}
        {resultado && (
          <div className="resultado">
            {ePalindromo && <span className="emoji-feliz">😊</span>}
            {ePalindromo === false && <span className="emoji-triste">😢</span>}
            <p>{resultado}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Palindromo