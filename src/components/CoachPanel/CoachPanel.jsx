import './CoachPanel.css'
import View from '../../assets/view.png'
import Delete from '../../assets/delete.png'

const CoachPanel = () => {
  return (
    <main id='CoachPanel'>
      <h1>Organizar seciones</h1>
      <div className='sesions'>
        <h3>Ricardo</h3>
        <p>Ricardo tiene 22 años, trabaja en microsoft y no ha encontrado motivacion
          ultimamente llega tarde y esta cansado.</p>
        <img className='icons' src={View} alt="" />
        <img className='icons' src={Delete} alt="" />
      </div>
    </main>
  );
}

export default CoachPanel;
