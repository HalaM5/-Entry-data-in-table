
document.querySelector('.head').style.color='white'
let  students = [
    {
        Name: 'Khaled',
        Age: '15',
        Year: '2000',
        school: 'Arabic',
        class: 'f2 moon'

    },
    {
        Name: 'Ahmad',
        Age: '15',
        Year: '2002',
        school: 'Arabic',
        class: 'f2 moon'




    },
    {
        Name: 'Sami',
        Age: '15',
        Year: '2010',
        school: 'Arabic',
        class: 'f2 moon'



    },
    {
        Name: 'Yarob',
        Age: '15',
        Year: '2010',
        school: 'Arabic',
        class: 'f2 moon'



    },
    {
        Name: 'mo',
        Age: '150',
        Year: '1900',
        school: 'Arabic',
        class: 'f2 moon'



    }
] 
/* will fill head of table dynamically */
let ke =['Name', 'Age','Year','School','class']


/* create function for create table in Dom */
function creatTable(){
    //TODO: create table tag
    let table = document.createElement('table')
    //TODO: add table tag into div 
    let tableShape = document.querySelector('#table').appendChild(table);
    //TODO: creat table head tag
    let head = document.createElement('thead');
    let formTable =tableShape.appendChild(head);
    /* create th tag   */
    let headName = document.createElement('th')
    let ageHead = document.createElement('th')
    let yearHead = document.createElement('th');
    
    /* create tbody of table and add it to table*/
    let bodyTable = document.createElement('tbody')
    tableShape.appendChild(bodyTable)

}
//TODO: recall funcation
creatTable();

/* creat function for add dynamically data in table */
function addToBody(){
    for (let student of students){
        //*creat rows dynamically for adding new object into array and add them into table body */ 
        let row = document.createElement('tr')
        let rowIn = document.querySelector('tbody').appendChild(row);
        let dataName = document.createElement('td')
        let dataAge = document.createElement('td')
        let dataYear = document.createElement('td')
        let dataSchool = document.createElement('td')
        let dataclass = document.createElement('td')

        /* add cells to row and fill cell with data */
        //TODO: first letter capital and remain is small letter
        rowIn.appendChild(dataName).innerHTML= student.Name.charAt(0).toUpperCase()+student.Name.slice(1);
        rowIn.appendChild(dataAge).innerHTML = student.Age;
        rowIn.appendChild(dataYear).innerHTML = student.Year;
        rowIn.appendChild(dataSchool).innerHTML = student.school.charAt(0).toUpperCase()+student.school.slice(1);
        rowIn.appendChild(dataclass).innerHTML = student.class.charAt(0).toUpperCase()+student.class.slice(1);

    }
}
//TODO: recall funcation
addToBody()

/* create function for create number of <th> tag equal to number of item in ke array  */
function createHead(){
    for(let kee of ke){
    let tH = document.createElement('th')
    //let lengthh = student.key().length
    tH.innerHTML=kee
    //let tD = document.createElement('td')
    document.querySelector('thead').appendChild(tH)

    }

}
// TODO: recall function
createHead()

document.querySelector('#button').addEventListener('click',function(){
    console.log('hi');
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let year = document.querySelector('#year').value;
    let school = document.querySelector('#school').value;
    let clas = document.querySelector('#class').value;

    students.push(name);
    students.push(age);
    students.push(year);
    students.push(school);
    let creatTr =document.createElement('tr')
    let creatTdN =document.createElement('td')
    let creatTdA =document.createElement('td')
    let creatTdY =document.createElement('td')
    let creatTdS =document.createElement('td')
    let creatTdC =document.createElement('td')





    creatTdN.innerHTML=name.charAt(0).toUpperCase()+name.slice(1);
    creatTdA.innerHTML=age;
    creatTdY.innerHTML=year;
    creatTdS.innerHTML=school.charAt(0).toUpperCase()+school.slice(1);
    creatTdC.innerHTML=clas.charAt(0).toUpperCase()+clas.slice(1);


    creatTr.appendChild(creatTdN)
    creatTr.appendChild(creatTdA)
    creatTr.appendChild(creatTdY)
    creatTr.appendChild(creatTdS)
    creatTr.appendChild(creatTdC)

    document.querySelector('tbody').appendChild(creatTr)


})
