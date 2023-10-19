const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
} )

const hiddenElements = document.querySelectorAll('.transition')
hiddenElements.forEach((el) => observer.observe(el));

let list = document.querySelectorAll('.list');
let newsbox = document.querySelectorAll('.newsbox');

for(i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(j = 0; j < list.length; j++){
            list[j].classList.remove('active-list2');
        }
        this.classList.add('active-list2');

        let datafilter = this.getAttribute('data-filter');
        for(k = 0; k < newsbox.length; k++){
            newsbox[k].classList.remove('active');
            newsbox[k].classList.add('hider');
            if((newsbox[k].getAttribute('data-item') == datafilter) || (datafilter == 'all')){
                newsbox[k].classList.remove('hider');
                newsbox[k].classList.add('active');
            }
        }
    })
}


function validateForm() {
    let check = document.querySelectorAll('.form-control');
    let fill = true;
    for(i=0; i<check.length; i++){
        if(check[i].value ==""){
            alert("Isi Data terlebih dahulu")
            fill=false;
            break;
        }
    }
    if(fill){
        alert("Data berhasil disimpan")
        for(i=0; i<check.length; i++){
            check[i].value = "";
        }
    }
};
