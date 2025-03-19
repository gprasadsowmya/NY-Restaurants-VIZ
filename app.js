const vizUrl = 'https://public.tableau.com/views/NYCRestaurantsDashboard_17423435798770/Dashboard1?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

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
