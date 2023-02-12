//DATABASE 'my_first_db'.
use my_first_db

//STUDENTS COLLECTION
db.createCollection('students')

//INFORMATION OF EACH STUDENT:
db.students.insert({name:'Sophia', home_state:'California',lucky_number:10, birthday: {month:5,day:13,year:1997}})
db.students.insert({name:'Marie', home_state:'Washington',lucky_number:7, birthday: {month:3,day:5,year:1998}})
db.students.insert({name:'Jack', home_state:'Colorado',lucky_number:4, birthday: {month:2,day:10,year:1996}})
db.students.insert({name:'Rachel', home_state:'California',lucky_number:13, birthday: {month:11,day:21,year:1997}})
db.students.insert({name:'Nicole', home_state:'Seatle',lucky_number:21, birthday: {month:8,day:20,year:1990}})

//FIND ALL THE STUDENTS.
db.students.find().pretty()

//FIND STUDENTS FROM California (San Jose Dojo) o Washington (Seattle Dojo).
db.students.find({$or:[{home_state:'California'},{home_state:'Washington'}]}).pretty()

//FIND STUDENTS WHOSE lucky_number > 3
db.students.find({lucky_number: {$gt:3}}).pretty()

//FIND STUDENTS WHOSE lucky_number =<10
db.students.find({lucky_number: {$lt:10}}).pretty()

//FIND STUDENTS WHOSE lucky_number ARE BETWEEN 1 - 9.
db.students.find({$and:[{lucky_number: {$gt:1}},{lucky_number: {$lte:9}}]}).pretty()

//ADD a field called "interest" to an ARRAY. Entries: 'codificación', 'brunch', 'MongoDB'.
db.students.update({}, {$set: {intereses: ['coding','brunch','MongoDB']}}, false, true)

//ADD interests to each students
db.students.update({name:'Sophia'},{$push:{intereses: 'Photography'}})
db.students.update({name:'Marie'},{$push:{intereses: 'Techonology'}})
db.students.update({name:'Jack'},{$push:{intereses: 'Business'}})
db.students.update({name:'Rachel'},{$push:{intereses: 'Photography'}})
db.students.update({name:'Nicole'},{$push:{intereses: 'Food'}})

//ADD tax as someone's interest.
db.students.update({name:'Sophia'},{$push:{intereses: 'Tax'}})

//DELETE tax previously added
db.students.update({name:'Sophia'},{$pull:{intereses: 'Tax'}})

//DELETE all the students from California.
db.students.remove({home_state:'California'})

//DELETE a students by the name.
db.students.remove({name:'Rachel'})

//REMOVE a student whose number lucky_number >5 
db.students.remove({lucky_number:{$gt:5}},true)

//ADD a field for each student collection, called 'number_of_belts' as 0.
db.students.update({}, {$set: {number_of_belts:0}}, false, true)

//Increase number_of_belts=1 for each student from Washington (Seattle Dojo).
db.students.update({home_state:'Washington'}, {$inc: {number_of_belts:1}}, false, true)

//CHANGE the field 'number_of_belts' a 'belts_earned'
db.students.update({},{$rename:{'number_of_belts': 'belts_earned'}},false,true)

//DELETE the field 'lucky_number'.
db.students.update({},{$unset:{lucky_number: ''}},false,true)

//ADD the field 'updated_on' and sets the value as the current date.
db.students.update({},{$currentDate:{updated_on: true}},false,true)