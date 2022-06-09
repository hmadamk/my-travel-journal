import gpsIcon from '../images/gpsIcon.svg'
import data from '../data'
function Article(props) {
    return (
        <div className='place'>
            <div className='img'><img src={props.imageUrl} alt="mountain fugi" /></div>
            <div className='info'>
                <div className='location'><img src={gpsIcon} alt="gps icon" /><span>{props.location}</span> <a href={props.googleMapsUrl} rel="noreferrer" target="_blank">View on Google Maps</a></div>
                <h2>{props.title}</h2>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}
function Articles() {
    let elements = data.map(item =>
        <Article
            key={item.id}
            {...item}
        />
    )
    return (
        <article>
            {elements}
        </article>
    )
}
export default function Main(props) {
    return (
        <main>
            <Articles />
        </main>
    )
}