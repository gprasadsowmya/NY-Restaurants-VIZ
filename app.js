const vizUrl = 'https://public.tableau.com/app/profile/sowmya.prasad/viz/NYCRestaurantsDashboard_17423435798770/Dashboard1?publish=yes';

function initViz() {
    const containerDiv = document.getElementById('vizContainer');
    const options = {
        hideTabs: true,
        width: '100%',
        height: '600px'
    };
    new tableau.Viz(containerDiv, vizUrl, options);
}

document.addEventListener('DOMContentLoaded', initViz);
