import { useSelector, useDispatch } from "react-redux";

// Mui for dropdown menu
import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";

// This component will live inside of FavoritesItem
// The currently mapped gif object will pass in it's category Id
export default function CategoryDisplay({categoryName, favoriteId}) {


    const categoriesArray = useSelector(store => store.categories);
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        // Trigger Saga PUT request to update favorites table
        dispatch({type: 'SAGA_PUT_CAT', payload: { newCategoryId: event.target.value, favoriteId: favoriteId }});

        // Also use local state to force item reload
        // setCurrentCat(event.target.)
    }

    return (
        // CURRENT CATEGORY WITH A DROP-DOWN TO CHANGE CATEGORY
        <>
        <p>{categoryName}</p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={''}
          label={categoryName}
          onChange={handleCategoryChange}
        >
          <MenuItem value={categoriesArray[0]?.id}>{categoriesArray[0]?.name}</MenuItem>
          <MenuItem value={categoriesArray[1]?.id}>{categoriesArray[1]?.name}</MenuItem>
          <MenuItem value={categoriesArray[2]?.id}>{categoriesArray[2]?.name}</MenuItem>
          <MenuItem value={categoriesArray[3]?.id}>{categoriesArray[3]?.name}</MenuItem>
          <MenuItem value={categoriesArray[4]?.id}>{categoriesArray[4]?.name}</MenuItem>
        </Select>
        <FormHelperText>Click to change category</FormHelperText>
      </FormControl>
      </>
        
    );
}