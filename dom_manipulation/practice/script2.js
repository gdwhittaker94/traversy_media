const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//! FORM SUBMIT BUTTON EVENT
form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1) -> test to see that it works ... worked 👍

    // ? 'preventDefault' to stop the initial/normal form submission behaviour from happening.

    //! Get Input Value
    const newItem = document.getElementById('item').value;

    // ? Don't forget to add 'value' to end in order for the actual text input to appear in the new li element!

    //! Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li) 👍

    //! Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //! Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));

    //! Append delete button to li
    li.appendChild(deleteBtn)

    //! Append li to list
    itemList.appendChild(li);
}

// !DELETE EVENT
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if (e.target.classList.contains('delete')) {
        // console.log(1) 👍
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// !FILTER EVENT
filter.addEventListener('keyup', filterItems);

function filterItems(e) {

    // convert to lower case
    let text = e.target.value.toLowerCase();
    // console.log(text) 👍

    // get li elements
    let items = itemList.getElementsByTagName('li');

    // convert HTML collection to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        // console.log(itemName); 👍
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}