import './TablePlateCard.css';

export default function PlateTableCard(props: { plateImagePath: string; plateTitle: string; calories: number; proteins: number; carbs: number; fat: number } ){
    return(
        <div className="table-plate-card">
            <div className='table-plate-image'>
                <img src={props.plateImagePath}></img>
            </div>
            <div className="table-plate-title">
                <p>{props.plateTitle}</p>
            </div>
            <div className="table-plate-data">
                <div className="table-plate-calories">{props.calories} cal</div>
                <div className="table-plate-macros">
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
        </div>
    )
}