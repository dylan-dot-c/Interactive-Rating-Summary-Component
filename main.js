var selected = undefined
var ratingbtn = document.querySelectorAll('.rating')
var submit = document.querySelector('#submit')
var ratingState = document.querySelector('#rating-state');
var thankState = document.querySelector('#thank-you-state');
var res, id;

thankState.style.display = 'none';


for(i=0;  i<ratingbtn.length; i++){
    ratingbtn[i].addEventListener('click', (btn) => {
        // alert("Hello");
        res = btn.target;
        id = res.id
        if(selected){
            selected.classList.remove('selected')
            selected = null
        }
        if(!selected){
            // selected.classList.remove('rating')
            res.classList.add('selected')
        }
        
        selected = res;
        // console.log(x)
        console.log(btn)
    })
}

submit.addEventListener('click', function(){
    // console.log(selected === undefined)
    if(selected===undefined){
        alert("Please select a rating please");
        return
    }else{
        thankState.style.display = 'flex';
        ratingState.style.display = 'none';

        let result = document.querySelector('#rating');
        result.innerText = id;
    }
})