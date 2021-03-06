import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './App.css';
import ThreeStar from '../images/3star.png';
import FourStar from '../images/4star.png';
import FiveStar from '../images/5star.png';
import hrt from '../images/hrt.png';
import bod from '../images/bod.png';
import brv from '../images/brv.png';
import skl from '../images/skl.png';
import wis from '../images/wis.png';

const ResultsGrid = (props) => (

    <Table striped condensed>
      <tbody>
        {props.items.map((row, index) =>
            <tr key={index}>
            {row.map((col, index) =>
                <td key={index}>
                  <div className="unitContainer">
                    {col.rarity === '5' ? (<div  className={"fivestar " + (col.type.includes('b-featured') ? 'featured' : col.type.includes('a-rated') ? 'rated' : '')}><img src={col.thumb} alt="thumb" className="flair"/></div>) : null }
                    {col.rarity === '4' ? (<div className="fourstar"><img src={col.thumb} alt="thumb" className="flair"/></div>) : null }
                    {col.rarity === '3' ? (<div className="threestar"><img src={col.thumb} alt="thumb" className="flair"/></div>) : null }

                          {col.unitType === 'hrt' ? (<img src={hrt} className="unitType" alt="unitType"/>) : null }
                          {col.unitType === 'bod' ? (<img src={bod} className="unitType" alt="unitType"/>) : null }
                          {col.unitType === 'brv' ? (<img src={brv} className="unitType" alt="unitType"/>) : null }
                          {col.unitType === 'skl' ? (<img src={skl} className="unitType" alt="unitType"/>) : null }
                          {col.unitType === 'wis' ? (<img src={wis} className="unitType" alt="unitType"/>) : null }

                          {col.rarity === '5' ? (<img src={FiveStar} className="rarity" alt="rarity"/>) : null }
                          {col.rarity === '4' ? (<img src={FourStar} className="rarity" alt="rarity"/>) : null }
                          {col.rarity === '3' ? (<img src={ThreeStar} className="rarity" alt="rarity"/>) : null }
                  </div>
                  {props.type ==='all' ? ( <span className="counter">x{col.count}</span> ): null}
              </td>
            )}
            </tr>
        )}
      </tbody>
    </Table>
);


ResultsGrid.propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default ResultsGrid;
