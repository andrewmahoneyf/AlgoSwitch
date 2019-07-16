// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
    {checked: false, text: 'Check on miner1. Last seen 2 hours ago'},
    {checked: false, text: 'Send Zcash balance to Bittrex account'},
    {checked: true, text: 'Transfer coins to Ethereum and send to GDAX account'},
    {checked: true, text: 'Update preferred coin to Ethereum'}
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = [
    "Name", "Country", "City", "Salary"
];
const tbody = [
    { className:"table-success", data: [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] },
    { className:"", data: [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] },
    { className:"table-info", data: [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] },
    { className:"", data: [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] },
    { className:"table-danger", data: [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] },
    { className:"", data: [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ] },
    { className:"table-warning", data: [ "Jon Porter" , "Portugal" , "Gloucester" , "$98,615" ] }
];

export {
    tasks, // tasks list for Tasks card in Dashboard view
    thead, // data for <thead> of table in TableList view
    tbody, // data for <tbody> of table in TableList view
};
