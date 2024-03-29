import api from '../../api/assistants'
import { ActionTypes } from '../constants/action-types'

// Devuelve todos los assistentes de la api
export const fetchAssistants = async (dispatch) => {
  dispatch({
    type: ActionTypes.ASSISTANTS_LOADING_REQUEST,
    payload: { loading: true }
  })

  try {
    let data = await api.get('assistant').then(({ data }) => data)
    dispatch({ type: ActionTypes.FETCH_ASSISTANTS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

// Devuelve un assistente seleccionado
export const fetchSelectedAssistant = (id) => async (dispatch) => {
  dispatch({
    type: ActionTypes.ASSISTANT_LOADING_REQUEST,
    payload: { loading: true }
  })
  try {
    let data = await api.get(`assistant/${id}`).then(({ data }) => data)
    dispatch({ type: ActionTypes.SELECTED_ASSISTANT, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const filterAssistant = (current) => (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_ASSISTANTS,
    payload: current
  })
}

export const setCurrentDay = (currentDay) => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_CURRENT_DAY,
    payload: currentDay
  })
}

export const setSelectedDay = (select) => (dispatch) => {
  dispatch({
    type: ActionTypes.SET_SELECTED_DAY,
    payload: select
  })
}

const assistantDelete = () => ({ type: ActionTypes.DELETE_ASSISTANT })

export const assistantDeleteRequest = (id) => async (dispatch) => {
  await api
    .delete(`assistant/${id}`)
    .then((resp) => {
      console.log('resp', resp)
      dispatch(assistantDelete())
      dispatch(fetchAssistants)
    })
    .catch((error) => console.log(error))
}

export const assistantUpdateRequest = (id, data) => async (dispatch) => {
  dispatch({
    type: ActionTypes.ASSISTANT_LOADING_REQUEST,
    payload: { loading: true }
  })

  try {
    await api
      .put(`assistant/${id}`, data)
      .then((resp) => console.log('resp', resp))
    dispatch({ type: ActionTypes.UPDATE_ASSISTANT, payload: data })
  } catch (error) {}
}

export const assistantAddRequest = (assistant) => async (dispatch) => {
  try {
    await api.post('assistant', assistant).then(({ data }) => data)
    dispatch({ type: ActionTypes.ADD_ASSISTANT })
    dispatch(fetchAssistants)
  } catch (error) {
    console.log(error)
  }
}

// Modifica o Actualiza el 'state' del assistente
export const setAssistants = (assistants) => {
  return {
    type: ActionTypes.SET_ASSISTANTS,
    payload: assistants
  }
}

// Retira la selección del assistente
export const removeSelectedAssistant = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ASSISTANT
  }
}

/*export const selectedAssitant = (assistant) => {
  return {
    types: ActionTypes.SELECTED_ASSISTANT,
    payload: assistant
  }
}*/
