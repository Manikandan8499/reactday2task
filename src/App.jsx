import './App.css'

function App() {
  const free =
    {
      type: "FREE",
      price: {
        value: 0,
        style: "Price_abled",
      },
      Users: {
        value: "Single User",
        style: "abled",
        symbol: "✔️",
      },
      storage: {
        value: 50,
        style: "abled",
        symbol: "✔️",
      },
      public_projects: {
         style: "abled",
         symbol: "✔️",
      },
      access: {
        style: "abled",
        symbol: "✔️",
      },
      private_projects:{
        style: "disabled",
        symbol: "❌",
      },
      support:{
        style: "disabled",
        symbol: "❌",
      },
      subdomain:{
        style: "disabled",
        symbol: "❌",
      },
      status_reports:{
        style: "disabled",
        symbol: "❌",
      },
    };
  const plus = 
    {
      type: "PLUS",
      price:{
        value: 9,
        style: "Price_abled",
      },
      Users: {
        value: "5 Users",
        style: "abled",
        symbol: "✔️",
      },
      storage: {
        value: 50,
        style: "abled",
        symbol: "✔️",
      },
      public_projects: {
         style: "abled",
         symbol: "✔️",
      },
      access: {
        style: "abled",
        symbol: "✔️",
      },
      private_projects:{
        style: "abled",
        symbol: "✔️",
      },
      support:{
        style: "abled",
        symbol: "✔️",
      },
      subdomain:{
        style: "abled",
        symbol: "✔️",
      },
      status_reports:{
        style: "disabled",
        symbol: "❌",
      },
    };
  const pro = 
    {
      type: "PRO",
      price: {
        value: 49,
        style:"Price_abled",
      },
      Users: {
        value: "Unlimited Users",
        style: "abled",
        symbol: "✔️",
      },
      storage: {
        value: 50,
        style: "abled",
        symbol: "✔️",
      },
      public_projects: {
         style: "abled",
         symbol: "✔️",
      },
      access: {
        style: "abled",
        symbol: "✔️",
      },
      private_projects:{
        style: "abled",
        symbol: "✔️",
      },
      support:{
        style: "abled",
        symbol: "✔️",
      },
      subdomain:{
        style: "abled",
        symbol: "✔️",
      },
      status_reports:{
        style: "abled",
        symbol: "✔️",
      },
    };

  return (
    <>
    <PriceCard model={free}/>
    <PriceCard model={plus}/>
    <PriceCard model={pro}/>
    </>
  );
}

export default App


function PriceCard( { model } ){
  return (
   <div className="price-card">
       <p className="type">{model.type}</p>
       <p className={model.price.style}> ${model.price.value}/month</p><hr/>
       <p className={model.Users.style}><span>{model.Users.symbol}</span>  {model.Users.value}</p>
       <p className={model.storage.style}><span>{model.storage.symbol}</span>  {model.storage.value} GB Storage</p>
       <p className={model.public_projects.style}><span>{model.public_projects.symbol}</span>  Unlimited Public Projects</p>
       <p className={model.access.style}><span>{model.access.symbol}</span>  Community Access</p>
       <p className={model.private_projects.style}><span>{model.private_projects.symbol}</span>  Unlimited Private Projects</p>
       <p className={model.support.style}><span>{model.support.symbol}</span>  Dedicated Phone Support</p>
       <p className={model.subdomain.style}><span>{model.subdomain.symbol}</span>  Free Subdomain</p>
       <p className={model.status_reports.style}><span>{model.status_reports.symbol}</span>  Monthly Status Reports</p>
       <button className="btn">BUTTON</button>
   </div>
  );
}