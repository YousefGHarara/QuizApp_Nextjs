
import QuestionList from '@/components/features/question/QuestionList';
import React from 'react';

type Params =  Promise<{id: string}>

const Page = async (props : {params: Params}) => {

    const params = await props.params;
    const id = params.id;

    return (
        <div className='w-full min-h-screen flex items-center justify-center px-[5%]'>
            <QuestionList category={id}/>
        </div>
    );
}

export default Page;
