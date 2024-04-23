import React from 'react'
import Card from './Card.jsx'
export default function Quiz(props) {

    const [quesDetails, setQuesDetails] = React.useState({})
    // let questions;
    // React.useEffect(() => {
    //   console.log('doing it once')
    //     fetch("https://opentdb.com/api.php?amount=5&type=multiple" , {
    //         headers: {
    //             'Accept': '*/*',
    //             'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         // setQuesDetails(data.results)
    //         // console.log(quesDetails)
    //         // questions = data.results
    //         // setQuesDetails(questions)
    //         console.log(data.results)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, []);

    React.useEffect(() => {
        setQuesDetails({
            "response_code": 0,
            "results": [
              {
                "type": "multiple",
                "difficulty": "medium",
                "category": "History",
                "question": "In relation to the British Occupation in Ireland, what does the IRA stand for.",
                "correct_answer": "Irish Republican Army",
                "incorrect_answers": [
                  "Irish Rebel Alliance",
                  "Irish Reformation Army",
                  "Irish-Royal Alliance"
                ]
              },
              {
                "type": "multiple",
                "difficulty": "medium",
                "category": "History",
                "question": "When did L. L. Zamenhof first publish &quot;Unua Libro&quot;, the first publication describing his international language Esperanto?",
                "correct_answer": "1887",
                "incorrect_answers": [
                  "1897",
                  "1905",
                  "1915"
                ]
              },
              {
                "type": "multiple",
                "difficulty": "medium",
                "category": "Entertainment: Video Games",
                "question": "In &quot;Overwatch&quot;, what is the name of Mercy&#039;s &quot;ultimate ability&quot;?",
                "correct_answer": "Valkyrie",
                "incorrect_answers": [
                  "Earthshatter",
                  "Rocket Barrage",
                  "Molten Core"
                ]
              },
              {
                "type": "multiple",
                "difficulty": "medium",
                "category": "Entertainment: Video Games",
                "question": "Which genre is the Touhou Project associated with?",
                "correct_answer": "Shoot &#039;em up (bullet-hell) &amp; Fighting",
                "incorrect_answers": [
                  "Turn-Based Strategy",
                  "MMORPG",
                  "Building "
                ]
              },
              {
                "type": "multiple",
                "difficulty": "medium",
                "category": "Geography",
                "question": "How many independent countries are there within the continent of South America?",
                "correct_answer": "12",
                "incorrect_answers": [
                  "8",
                  "9",
                  "10"
                ]
              }
            ]
          })
    }
    ,[])

    // async function getQuestions() {
    //   let res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //   let data = await res.json()
    //   console.log(data.results)
    //   return data.results
    // }

    // React.useEffect(() => {
    //   setQuesDetails(prev => getQuestions())
    // }, [])

    const cards = quesDetails.results && quesDetails.results.map(object => {
        return (
            <Card object={object} key={object.question}/>
        )
    })

    return (
        <main>
            quiz page. WIP
            {cards}

            <button onClick={props.changeWelcome} className='go-back'>Go back</button>
        </main>
    )
}