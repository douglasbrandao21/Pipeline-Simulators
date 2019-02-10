$(document).ready(function() {

    let marker = 0

    function createTable() {
        for(let i=0; i<=18; i++) 
            $('#table-titles').append(`<th><span class="title-th">${i}</span></th>`)
    }

    function formatTables() {
        let Stages = Array('FI','DI','CO','FO','EI','WO')

        $('#table-cells').append('<tr>')

        for(let i=0; i<marker; i++) 
            $('#table-cells').append(`<td class="empty-cell"><span class="table-data"></span></td>`)
        
        for(let i=0; i<6; i++)
            $('#table-cells').append(`<td class="table-cell"><span class="table-data">${Stages[i]}</span></td>`)

        $('#table-cells').append('</tr>')
        marker++
    }

    createTable()

    $('#active-btn').click(function() {
        formatTables()
    })

    $('#clear').click(function() {
        $('#table-cells').empty()
        marker = 0
    })

});