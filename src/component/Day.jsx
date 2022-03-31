import dummy from '../db/data.json'
import { useParams} from 'react-router-dom'
import Word from './Word'

export default function Day(){

const {day} = useParams() // url값 변경시 변수 출력 = 특정 날짜로 이동
const wordList = dummy.words.filter(word =>(
	word.day === Number(day)
))



return (
	<>
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{wordList.map(word=>(
					<Word word={word} key={word.id}></Word>
				))}
			</tbody>
		</table>
	</>
)
}