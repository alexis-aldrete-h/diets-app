import './NutritionLabel.css';

export default function NutritionLabel(props: { calories: number; proteins: number; carbs: number; fat: number} ) {
    return (
        <div id='nutrition-label'>
            <div className="calories"><p>{props.calories} cal</p></div>
            <div className="macros">
                <div className='macros-data' id="proteins">
                    <p>P: {props.proteins}</p>
                </div>
                <div className='macros-data' id="carbs">
                    <p>C: {props.carbs}</p>
                </div>
                <div className='macros-data' id="fat">
                    <p>P: {props.fat}</p>
                </div>
            </div>
        </div>
    );
}