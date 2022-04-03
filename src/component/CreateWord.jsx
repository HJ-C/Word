import useFetch from "../hooks/useFetch"
import {useState, useRef} from 'react'
import { useHistory} from "react-router-dom"

export default function CreateWord(){

    const days = useFetch(`http://localhost:3001/days`)
   
    // Dom에 접근
    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)

    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

//새로고침 없애기
function onSubmit(e){
    e.preventDefault()

    if(!isLoading){
    setIsLoading(true)// 통신 중 버튼을 여러번 눌러도 반응 안하게 설정

    fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value ,
            isDone : false
        }),
      }).then(res => {
        if (res.ok) {  
            alert('생성이 완료 되었습니다')
            history.push(`/day/${dayRef.current.value}`) //페이지 변환
            setIsLoading(false) //통신 중 버튼을 여러번 눌러도 반응안함
        }
      });
    }
}

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Emg</label>
                <input type="text" placeholder="computer"  ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터"  ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id} value={day.day}> {day.day}</option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}