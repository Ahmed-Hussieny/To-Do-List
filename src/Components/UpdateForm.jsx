const UpdateForm =({ updateData , changeTask ,updateTask ,cancleUpdate})=>{
    return(

        <>
                <div className='row'>
        <div className='col'>
        <input
        value={updateData && updateData.title}
        onChange={(e)=>changeTask(e)} className='form-control form-control-lg'
        />
        </div>
        <div className='col-auto'>
        <button 
        onClick={updateTask}
        className='btn btn-lg btn-success mr-20'>
            Update
        </button>
        <button
        onClick={cancleUpdate} className='btn btn-lg btn-warning '>Cancle</button>
        </div>
        </div>
        </>
    )
}
export default UpdateForm