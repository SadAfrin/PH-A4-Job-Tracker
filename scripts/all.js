function updateJobStatsText() {
    const totalJobs = document.querySelectorAll('.card').length;
    const btnAll = document.getElementById('btn-all');
    const btnInterview = document.getElementById('interview-filter-btn');
    const btnRejected = document.getElementById('rejected-filter-btn');
    const jobStats = document.getElementById('job-stats');
    const allCards = document.querySelectorAll('.card');
    
    const totalDisplay = document.getElementById('total-jobs-count');
    if (totalDisplay) {
        totalDisplay.innerText = totalJobs;
    }

    if (btnAll.classList.contains('bg-blue-500')) {
        jobStats.innerText = `${totalJobs} jobs`;
    } else if (btnInterview.classList.contains('bg-blue-500')) {
        const interviewCount = document.getElementById('interview-count').innerText;
        jobStats.innerText = `${interviewCount} of ${totalJobs} jobs`;
        if (interviewCount === '0') {
            document.getElementById('all-cards').classList.add('hidden');
            document.getElementById('job-container').classList.remove('hidden');
        }
    } else if (btnRejected.classList.contains('bg-blue-500')) {
        const rejectedCount = document.getElementById('rejected-count').innerText;
        jobStats.innerText = `${rejectedCount} of ${totalJobs} jobs`;
        if (rejectedCount === '0') {
            document.getElementById('all-cards').classList.add('hidden');
            document.getElementById('job-container').classList.remove('hidden');
        }
    }

    //no job available msg showing
    if (totalJobs === 0) {
        document.getElementById('all-cards').classList.add('hidden');
        document.getElementById('job-container').classList.remove('hidden');
    }
}



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


    updateJobStatsText();
    
});


const interviewCountDisplay = document.getElementById('interview-count');
const rejectedCountDisplay = document.getElementById('rejected-count');
const jobStatsDisplay = document.getElementById('job-stats');
const totalJobsCount = document.querySelectorAll('.card').length;

//job filtering by INTERVIEW clicking
const interviewAddBtns = document.querySelectorAll('.interview-adding-btn');

interviewAddBtns.forEach(button => {
    button.addEventListener('click', function() {
        const card = button.closest('.card');
        const status = card.querySelector('.status');
        const btnRejectedFilter = document.getElementById('rejected-filter-btn');

        // card jodi age theke ejected thake
        if (card.classList.contains('is-rejected')) {
            card.classList.remove('is-rejected');
            rejectedCountDisplay.innerText = parseInt(rejectedCountDisplay.innerText) - 1;
            
            const rejBtn = card.querySelector('.rejected-adding-btn');
            rejBtn.disabled = false;
            rejBtn.innerText = "REJECTED";
            rejBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        // interview status set kora
        if (!card.classList.contains('is-interview')) {
            card.classList.add('is-interview');
            interviewCountDisplay.innerText = parseInt(interviewCountDisplay.innerText) + 1;
            
            if(status) {
                status.innerText = "INTERVIEW";
                status.classList.remove('bg-gray-200', 'bg-red-100', 'text-red-700');
                status.classList.add('bg-green-100', 'text-green-700');
            }

            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');
        }

        if (btnRejectedFilter.classList.contains('bg-blue-500')) {
            card.classList.add('hidden');
        }

        if (parseInt(rejectedCountDisplay.innerText) === 0 && btnRejectedFilter.classList.contains('bg-blue-500')) {
            document.getElementById('all-cards').classList.add('hidden');
            document.getElementById('job-container').classList.remove('hidden');
        }

        updateJobStatsText();

    });
});



//job filtering by REJECTED
const rejectedAddBtns = document.querySelectorAll('.rejected-adding-btn');

rejectedAddBtns.forEach(button => {
    button.addEventListener('click', function() {
        const card = button.closest('.card');
        const status = card.querySelector('.status');
        const btnInterviewFilter = document.getElementById('interview-filter-btn');//
        const btnRejectedFilter = document.getElementById('rejected-filter-btn');//

        if (card.classList.contains('is-interview')) {
            card.classList.remove('is-interview');
            interviewCountDisplay.innerText = parseInt(interviewCountDisplay.innerText) - 1;
            
            const intBtn = card.querySelector('.interview-adding-btn');
            intBtn.disabled = false;
            intBtn.innerText = "INTERVIEW";
            intBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            
        }

        if (!card.classList.contains('is-rejected')) {
            card.classList.add('is-rejected');
            rejectedCountDisplay.innerText = parseInt(rejectedCountDisplay.innerText) + 1;

            if(status) {
                status.innerText = "REJECTED";
                status.classList.remove('bg-gray-200', 'bg-green-100', 'text-green-700');
                status.classList.add('bg-red-100', 'text-red-700');
            }

            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');
        }   


        // interview er vetore thaka obosthai jodi rejected button e click kori
        if (btnInterviewFilter.classList.contains('bg-blue-500')) {
            card.classList.add('hidden');
        }

        if (parseInt(interviewCountDisplay.innerText) === 0 && btnInterviewFilter.classList.contains('bg-blue-500')) {
            document.getElementById('all-cards').classList.add('hidden');
            document.getElementById('job-container').classList.remove('hidden');
        }

        updateJobStatsText();
        
    });
}); 

updateJobStatsText();



//challenge part- del icon er jonne kaj
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('.card');
        if (card.classList.contains('is-interview')) {
            interviewCountDisplay.innerText = parseInt(interviewCountDisplay.innerText) - 1;
        } else if (card.classList.contains('is-rejected')) {
            rejectedCountDisplay.innerText = parseInt(rejectedCountDisplay.innerText) - 1;
        }
        card.remove();

        updateJobStatsText();
    });
});