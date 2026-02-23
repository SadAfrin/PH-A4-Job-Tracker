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

});



// console.log('all.js loaded');