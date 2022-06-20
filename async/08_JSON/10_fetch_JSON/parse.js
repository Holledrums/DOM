// in JSON sind Object properties immer in Anführungszeichen

// im JSON können Objekte und Arrays unbegrenzt verschachtelt werden
const dataString =
  '{"firstName": "Holger", "hobbies": ["biking", "climbing", "drumming"]}';

const obj = JSON.parse(dataString);

obj.hobbies.forEach((hobby) => {
  console.log(hobby);
});
