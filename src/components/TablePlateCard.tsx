import NutritionLabel from './NutritionLabel';
import './TablePlateCard.css';

export default function PlateTableCard(props: { plateImagePath: string; plateTitle: string; calories: number; proteins: number; carbs: number; fat: number }) {
    return (
        <div className="table-plate-card">
            <div className='table-plate-image'>
                <img src={props.plateImagePath}></img>
            </div>
            <div className="table-plate-title">
                <p>{props.plateTitle}</p>
            </div>
            <div className='nutrition-label-wrapper'>
                <NutritionLabel calories={props.calories} proteins={props.proteins} carbs={props.carbs} fat={props.fat} />
            </div>
        </div>
    )
}