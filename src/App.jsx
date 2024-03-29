import React, {useState} from 'react';
import { SearchField } from './SearchFilterStyled';
import {GalleryWrapper} from './filterable-gallery/FilterableGalleryStyled'
import galleryData from './filterable-gallery/galleryData';

const App = () => {
 const [searchData, setSearchData] = useState(galleryData);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItem = galleryData.filter((currValue) => {
      return currValue.category.includes(searchTerm);
    });

    setSearchData(filteredItem);
  };

  return(
    <>
      <div className='container'>
      <SearchField>
      <input 
         type="search"
        placeholder='enter animals, birds'
        onChange={handleChange}
        />

        
      </SearchField>

        {
          searchData.length === 0 && ( <h2>not data</h2>
                                      )
        }

        <GalleryWrapper>
          {
            searchData.map((currValue) => {
              const {id, img} = currValue;
              return(
                <div className='gallery_item' key={id}>
                 <img src={img} alt='gallery-img' />
                </div>
              )
            })
          } 
        
        </GalleryWrapper>
      </div>
    
    </>
  );
};


export default App;