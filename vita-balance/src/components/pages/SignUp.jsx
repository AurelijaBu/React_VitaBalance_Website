import './SignUp.css';

function SignUp() {
  return(
    <section className='signUpSection'>
      <div className='sportsPlanCard'>
        <h3>Free trial</h3>
        <h1>0 &euro;<span className='smallText'> /first week, then only 4,99 &euro;/week</span></h1>
        <p className='smallBlueTxt'>Try for free - 7 days with no commitment!</p>
        <button className='mainBuyButton'>Join now!</button>
        <ul>
          <li>✔️ Try out everything for free with no commitment.</li>
          <li>✔️ Access all workout plans and features without paying upfront.</li>
          <li>✔️ Get a sneak peek into personalized fitness routines.</li>
          <li>✔️ No rush - test everything at your own pace for an entire week.</li>
          <li>✔️ Decide if it's the right fit for you before committing to anything.</li>
        </ul>
      </div>
      <div className='sportsPlanCard'>
        <h3>Weekly subscription</h3>
        <h1>4,99 &euro;<span className='smallText'> /week</span></h1>
        <p className='smallBlueTxt'>Flexible and easy – Pay weekly as you go</p>
        <button className='buyButton'>Start easy</button>
        <ul>
          <li>✔️ Low cost per week, making it easy to try for a short period.</li>
          <li>✔️ Flexible plan to fit your changing schedule or fitness needs.</li>
          <li>✔️ Track progress week by week and adjust your routine.</li>
          <li>✔️ Access to all new workouts and updates weekly.</li>
          <li>✔️ Perfect for those who prefer short-term commitment with weekly goals.</li>
        </ul>
      </div>
      <div className='sportsPlanCard'>
        <h3>Monthly subscription</h3>
        <h1>14,99 &euro;<span className='smallText'> /month</span></h1>
        <p className='smallBlueTxt'>+1 week per month free!</p>
        <button className='buyButton'>Join the Movement</button>
        <ul>
          <li>✔️ Save 25% compared to the weekly plan, getting a full month for just 14.99 EUR.</li>
          <li>✔️ Enjoy a full month of workouts and updates with more time to see progress.</li>
          <li>✔️ Better long-term planning with a monthly approach.</li>
          <li>✔️ Gain access to advanced tracking and analytics over the course of the month.</li>
          <li>✔️ Perfect for those serious about committing and seeing real results over time.</li>
        </ul>
      </div>
    </section>
  );
}
  
export default SignUp;