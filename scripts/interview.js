document.getElementById('interview-filter-btn').addEventListener('click', function() {
    const allCards = document.getElementById('all-cards');
    const noJobs = document.getElementById('job-container');

    const individualCards = document.querySelectorAll('.card');
    let hasData = false;

    individualCards.forEach(card => {
        if (card.classList.contains('is-interview')) {
            card.classList.remove('hidden'); 
            hasData = true;
        } else {
            card.classList.add('hidden'); 
        }
    });

    if (hasData) {
        allCards.classList.remove('hidden');
        noJobs.classList.add('hidden');
    } else {
        allCards.classList.add('hidden');
        noJobs.classList.remove('hidden');
    }

    // // cards hiding
    // allCards.classList.add('hidden');
    // // No jobs message showing
    // noJobs.classList.remove('hidden');

    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('interview-filter-btn');
    const btnRejected = document.getElementById('rejected-filter-btn');

    btnInterview.classList.add('bg-blue-500', 'text-white');
    btnInterview.classList.remove('bg-white', 'hover:bg-blue-500', 'hover:text-white');

    btnAll.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnAll.classList.remove('bg-blue-500', 'text-white');

    btnRejected.classList.add('bg-white', 'hover:bg-blue-500', 'hover:text-white');
    btnRejected.classList.remove('bg-blue-500', 'text-white');
});


