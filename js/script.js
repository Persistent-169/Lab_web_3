window.num_of_rows = 0;

function make_a_table() {
    if (document.querySelector("#table") === null) {
        window.num_of_rows = 1;
        let table = document.createElement('table');
        table.id = 'table';
        table.innerHTML = '<tr><th>столбец1</th><th>столбец2</th></tr>\n' + '<tr id="' + window.num_of_rows + '"><td>' + window.num_of_rows + '</td><td>66</td></tr>\n'
        document.body.append(table);
        add.disabled = false;
        del.disabled = false;
        my_input.disabled = false;
    }
    else {
        alert("Таблица уже существует");
    }
}

function add_row() {
    window.num_of_rows += 1;
    table.innerHTML += '<tr id="' + window.num_of_rows + '"><td>' + window.num_of_rows + '</td><td>66</td></tr>\n';
}

function del_row() {
    if(my_input.value === "") {
        alert("Введите значение в поле");
    }
    else {
        if (my_input.value > window.num_of_rows) {
            alert("Введите существующее значение");
        }
        else {
            var el = document.getElementById(my_input.value);
            el.remove();
            }
        }
}
