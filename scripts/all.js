document.getElementById('btn-all').addEventListener('click', function() {
    const allCards = document.getElementById('all-cards');
    const noJobs = document.getElementById('job-container');
    //all cards show
    allCards.classList.remove('hidden');
    // not showing no job msg
    noJobs.classList.add('hidden');

    // Filter buttons active state
    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('interview-filter-btn');
    const btnRejected = document.getElementById('rejected-filter-btn');


    btnAll.classList.add('bg-blue-500', 'text-white');
    btnAll.classList.remove('bg-white', 'hover:bg-blue-500', 'hover:text-white');

    //baki button gula default kora
    btnInterview.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnInterview.classList.remove('bg-blue-500', 'text-white');
    
    btnRejected.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnRejected.classList.remove('bg-blue-500', 'text-white');


    const allCardsList = document.querySelectorAll('.card');
    allCardsList.forEach(card => card.classList.remove('hidden'));
    

});

//job filtering by INTERVIEW
const interviewAddBtns = document.querySelectorAll('.interview-adding-btn');
const interviewCountDisplay = document.getElementById('interview-count');

interviewAddBtns.forEach(button => {
    button.addEventListener('click', function() {

        let currentCount = parseInt(interviewCountDisplay.innerText);
        interviewCountDisplay.innerText = currentCount + 1;

        const card = button.closest('.card');
        card.classList.add('is-interview');

        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
    });
});


//job filtering by REJECTED
const rejectedAddBtns = document.querySelectorAll('.rejected-adding-btn');
const rejectedCountDisplay = document.getElementById('rejected-count');

rejectedAddBtns.forEach(button => {
    button.addEventListener('click', function() {

        let currentCount = parseInt(rejectedCountDisplay.innerText);
        rejectedCountDisplay.innerText = currentCount + 1;

        const card = button.closest('.card');
        card.classList.add('is-rejected');

        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');
    });
}); 


// console.log('all.js loaded');