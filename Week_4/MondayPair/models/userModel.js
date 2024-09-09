/*
{
  "name": "Matti Seppänen",
  "email": "matti@example.com",
  "password": "M@45mtg$",
  "phone_number": "+358401234567",
  "gender": "Male",
  "date_of_birth": "2000-01-15",
  "membership_status": "Active"
}
*/

let userArray = [];
let nextId = 1;

const getAll = () => {
    return userArray
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status) =>{
    if (!name| !email | !password | !phone_number | !gender | !date_of_birth | !membership_status){
        return false;
    }
    const newUser = {
        id: nextId++,
        name: name,
        password: password,
        phone_number: phone_number,
        gender: gender,
        date_of_birth: date_of_birth,
        membership_status: membership_status,
    };
    userArray.push(newUser);
    return newUser;
}

const findById = (id) => {
    const user = userArray.find((user) => user.id === Number(id));
    if (user) {
        return user;
    } else return false;
};

const updateOneById = (id, updatedData) => {
    const user = userArray.find((user) => user.id === Number(id));
    if (user && updatedData) {
        Object.assign(user,updatedData)
        return user;
    }
    return false;
}

const deleteOneById = (id) => {
    const user = findById(id);
    if (user) {
        const firstLength = userArray.length;
        userArray = userArray.filter((user) => user.id !== Number(id));
        return userArray.length < firstLength;
    }
    return false;
}

if (require.main === module) {
    let result = addOne("Matti Seppänen","matti@example.com","M@45mtg$","+358401234567","Male","2000-01-15","Active");
    console.log(result);
    result = addOne("Minerva A.","Minimal@example.com","FAKDSJFA$","+358401233567","Female","2003-01-05","Non-Active");
    console.log(result);
    console.log(`getAll called:`,getAll());
    console.log(`findById called:`,findById(2));
    console.log(`findById called:`, findById(3));
    console.log(
      `updateById called:`, updateOneById(2, {
        name: "Minerva Alexia"
      })
    );
    console.log(`findById called after item updated:`,findById(2));
    console.log(`deleteById called: `,deleteOneById(1));
    console.log(`findById called after item deleted:`,findById(1));
  }
  
  module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  