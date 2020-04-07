const getRandomValue = () => Math.round(Math.random() * 100)

const students = [
  'Джон', 'Анна', 'Мария', 'Алекс', 'Кевин'
]

/* 
написать промис, который при успехе, через 1 секунду вернет объект вида { name: 'Имя', value: 50 }, 
а при провале - вернет ошибку объекта Error
*/
const getStudentInfo = (name) => new Promise(
  (resolve, reject) => {
    if(resolve === getStudent){
      resolve(name)
    }else if(reject) {
      reject(new Error('vas'))}
  }
)

getStudentInfo('Анна')
    .then(function(student){
            console.log(`name: ${student} ${getRandomValue()}`)
        return getStudentInfo
    })
    
getStudentInfo('Питер')
  .then(function(student){
    console.log(`name: ${student} ${getRandomValue()}`)
        return getStudentInfo
  })
  .catch((err) => console.log(err.message))
    

// сколько баллов у Анны?

// сколько баллов у Питера? (не существующий студент)
// ваш код здесь


// общая таблица баллов и кто не смог набрать проходной балл в 60

 const getStudent = (student) => new Promise(
   (resolve, reject) => {
    setTimeout(() => {
        resolve({
          name: student,
          value: getRandomValue()
        })
    })
   }
 )

Promise.all([
  getStudent('Анна'),
  getStudent('Джон'),
  getStudent('Мария'),
  getStudent('Алекс'),
  getStudent('Кевин')
])
.then((students) => {
  students.forEach((src)=> {
    console.log(` name:${src.name} value:${src.value}`)
  })
})