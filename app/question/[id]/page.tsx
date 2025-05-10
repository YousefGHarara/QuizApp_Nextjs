
import QuestionList from '@/components/features/question/QuestionList';
import React from 'react';

type Params =  {
    params: {id: string};
}

const Page = ({params} : Params) => {

    const {id} = params;

    return (
        <div className='w-full min-h-screen flex items-center justify-center px-[5%]'>
            <QuestionList category={id}/>
        </div>
    );
}

export default Page;
