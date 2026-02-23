document.getElementById('rejected-filter-btn').addEventListener('click', function() {
    const allCards = document.getElementById('all-cards');
    const noJobs = document.getElementById('job-container');

    // cards hiding
    allCards.classList.add('hidden');
    // no jobs message showing
    noJobs.classList.remove('hidden');

    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('interview-filter-btn');
    const btnRejected = document.getElementById('rejected-filter-btn');

    btnRejected.classList.add('bg-blue-500', 'text-white');
    btnRejected.classList.remove('bg-white', 'text-gray-700', 'hover:bg-blue-500', 'hover:text-white');

    btnAll.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnAll.classList.remove('bg-blue-500', 'text-white');

    btnInterview.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnInterview.classList.remove('bg-blue-500', 'text-white');
});


// console.log('rejected.js loaded');