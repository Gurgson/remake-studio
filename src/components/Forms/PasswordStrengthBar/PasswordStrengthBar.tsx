"use client"
import React, { FC, useCallback, useEffect, useState } from 'react'
import { HiInformationCircle } from "react-icons/hi";
interface  IProps{
    props: {password: string}
}
interface IRules { 
    rule: RegExp,
    comment: string
}
const rulesSet : Array<IRules> = [
    {
        rule: /([0-9])/,
        comment: "Sagge password should include some numbers"
    },
    {
        rule: /([a-z])/,
        comment: "Safe password should include some small letters"
    },
    {
        rule: /([A-Z])/,
        comment: "Safe password should include capitalize letters"
    },
    {
        rule: /([!@$%^&])/,
        comment: "Safe password should include some special characters like !@$%^&]"
    },
    {
        rule: /.{8}/,
        comment: "Safe password should have at least 8 characters"
    },
]
const PasswordStrengthBar : FC<IProps> = ({props}) => {
    const [checkedRules, setRules] = useState<Array<boolean>>([]);
    const HowManyRulesChecked = useCallback(()=>{
    
        let checkedRules : Array<boolean>= [];
        rulesSet.forEach(item=>{
            if(props.password.match(item.rule))
                return checkedRules.push(true);
        })
        setRules(checkedRules);
        return checkedRules.length;
    },[props.password]);
    //TODO: Delete this it's placeholder
    useEffect(()=>{
        HowManyRulesChecked();

    },[HowManyRulesChecked])


    
    const barPercentage = useCallback(()=>{
        if(props.password.length <5)
            return 0;

        const s =  checkedRules.filter((item)=>item).length / rulesSet.length * 100;

        return Math.floor(s);
    },[checkedRules, props.password.length]); 
    const DescribePasswordStrength = useCallback(()=>{
        const a = barPercentage();
        if(a === 0)
            return "too short"
        if(a <= 40)
            return "weak";
        if(a < 90)
            return "medium"
        if(a >= 100)
            return "strong";
        
    },[barPercentage]); 
    return (
    <div className='flex flex-col gap-2 relative'>
        {/* password str word desc */}
        <p>Your password is: &nbsp; 
            <span className='text-primary-accent font-bold uppercase'>
                {DescribePasswordStrength()}
            </span> 
        </p>
        <HiInformationCircle className=" peer absolute top-0 right-1 cursor-pointer hover:text-primary-accent duration-500"/>
        <aside className=' rounded-md p-3 hidden gap-2 w-64 bg-primary-accent absolute top-5 z-10 right-1 origin-top peer-hover:flex peer-hover:animate-showFromRight '>
            <ul className='text-xs list-disc list-inside text-primary-white'>
                <p className=' text-base font-medium'>Minimal requirments:</p>
                <li className={` indent-2 ${(props.password.length >= 5)?"opacity-10":""}`} >Password should have at least 5 characters</li>
                <p className=' text-base font-medium'>For better password:</p>
                {
                    //todo: check password steps list
                    rulesSet.map((item, index)=>
                    <li className={` indent-2 ${(checkedRules[index])?"opacity-10":""}`} key={`password-str-list-li-key-${index}}`}>
                        {rulesSet[index].comment}
                    </li>
                    )
                }
            </ul>
            
        </aside>
        <div className='
        w-full border-2 rounded-xl overflow-hidden 
        border-secondary-greyLight bg-secondary-greyLight 
        '
        >
            <div className={`duration-300 h-3 bg-primary-accent`} style={{width: `${barPercentage()}%`}}/>
        </div>

    </div>
  )
}

export default PasswordStrengthBar