const userData = document.getElementById('userData');

const create = () => {

    // getting elements by ID...

    const fName = document.getElementById('fName');
    const lName = document.getElementById('lName');
    const email = document.getElementById('email');
    const location = document.getElementById('location');
    const phoneNo = document.getElementById('phoneNo');

    if (fName.value.trim() && lName.value.trim() && email.value.trim() && location.value.trim() && phoneNo.value.trim()) {

        // creating TR & TD tags...

        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');

        // creating delete btn...

        const delBtn = document.createElement('button');
        const delBtnText = document.createTextNode('Delete');
        delBtn.append(delBtnText);
        delBtn.setAttribute('class', 'btn btn-danger');
        delBtn.setAttribute('onclick', 'deleteThis(this)');

        // creating edit btn...

        const editBtn = document.createElement('button');
        const editBtnText = document.createTextNode('Edit');
        editBtn.append(editBtnText);
        editBtn.setAttribute('class', 'btn btn-warning');
        editBtn.setAttribute('onclick', 'edit(this)');

        // inserting data in table...

        const fNameText = document.createTextNode(fName.value);
        const lNameText = document.createTextNode(lName.value);
        const emailText = document.createTextNode(email.value);
        const locationText = document.createTextNode(location.value);
        const phoneNoText = document.createTextNode(phoneNo.value);
        td1.appendChild(fNameText);
        td2.appendChild(lNameText);
        td3.appendChild(emailText);
        td4.appendChild(locationText);
        td5.appendChild(phoneNoText);
        td6.appendChild(editBtn);
        td6.appendChild(delBtn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        userData.appendChild(tr);

        fName.value = '';
        lName.value = '';
        email.value = '';
        location.value = '';
        phoneNo.value = '';
    }

    else {
        alert('Please Fill all Fields')
    }

}

const deleteAll = () => {
    userData.innerHTML = '';

}

const deleteThis = (e) => {
    e.parentNode.parentNode.remove();
}

const edit = (t) => {
    // edit function coming soon

}











