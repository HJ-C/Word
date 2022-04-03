import {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Word from './Word'

export default function Day(){

const {day} = useParams() // url값 변경시 변수 출력 = 특정 날짜로 이동

const words = useFetch(`http://localhost:3001/words?day=${day}`)

return (
	<>
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{words.map(word=>(
					<Word word={word} key={word.id}></Word>
				))}
			</tbody>
		</table>
	</>
)
}