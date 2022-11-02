const getTools = async () => {
  fetch('http://127.0.0.1:3001/tools/get',
        {
            method: "GET",
        }
    ).then(response => response.json())
    .then(data => {
        console.log(data)
        data.results.map(result => {
          $('.tools').append( `
              <div class="tool">
                <img class="tool-image" src="${result.pic}" alt="">
                <p class="title">${result.title}</p>
                <div class="state-block">
                  <select name="tool-select" id="tool-select">
                    <option value="available" ${result.isTaken? "selected": ""} >Свободен</option>
                    <option value="taken" ${result.isTaken? "": "selected"}>Занят</option>
                  </select>
                  <img class="bell-image" src="pics/bell-${result.notifType}.png">
                </div>
              </div>
            `);
        })

        $('.tool').last().css('border-bottom', 'none')
    })
    .catch((err) => {
        console.log(err)
        console.log("An error occured while fetching.")
    })
};

getTools()
