import NutritionLabel from './NutritionLabel';
import './PlatesTable.css';

import TablePlateCard from './TablePlateCard';

export default function PlatesTable() {
    return (
        <div className="plates-table-container">
            <table className='table'>
                <tr>
                    <th></th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th scope="col">Sábado</th>
                    <th scope="col">Domingo</th>
                </tr>
                <tr>
                    <td></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                    <td className="days-objective-macros"><NutritionLabel calories={1400} proteins={5} carbs={4} fat={3} /></td>
                </tr>
                <tr>
                    <th className="hours" scope="row">7:00 am</th>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td className='plate-cells'><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                </tr>
                <tr>
                    <th className="hours" scope="row">10:30 am</th>
                    <td ><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td ><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                </tr>
                <tr>
                    <th className="hours" scope="row">2:00 pm</th>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                </tr>
                <tr>
                    <th className="hours" scope="row">5:30 pm</th>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                </tr>
                <tr>
                    <th className="hours" scope="row">8:00 pm</th>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                    <td><TablePlateCard plateImagePath='/images/food9.png' plateTitle='Huevo con Verduras' calories={315} proteins={5} carbs={4} fat={3} /></td>
                </tr>

            </table>
        </div>
    );
}