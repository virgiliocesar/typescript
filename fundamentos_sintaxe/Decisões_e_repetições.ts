const num:number = 10;

if (num > 0) {
    console.log("O número é maior que zero.");
} else {
    console.log("O número é menor ou igual a zero.");
}

const typeUser = {
admin: "admin",
user: "user",
guest: "guest",
}

function checkUserOne(user: string) {
    if(user === typeUser.admin) {
        console.log("O usuário é um admin.");
    } else if (user === typeUser.user) {
        console.log("O usuário é um user.");
    } else {
        console.log("O usuário é um guest.");
    }
}
checkUserOne("user");

function checkUserTwo(user: string) {
  console.log(user as keyof typeof typeUser);
}

checkUserTwo("user");