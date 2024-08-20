// string slicing = creating a substring from a portion of another string 

// example =        string.slice(start, end);

const email = "uwawuwuz@gmail.com";

    let username = email.slice(0, email.indexOf("@"));
    let emailType = email.slice(email.indexOf("@") + 1);

    console.log(username);
    console.log(emailType);