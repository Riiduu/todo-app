import AddIcon from '../assets/plus.png'
import clipboard from '../assets/Clipboard.png'

import { collection, query, getDocs, doc, setDoc, getFirestore } from 'firebase/firestore';
import app from '../firebase.ts';

import {useState, useRef, useEffect} from 'react'

import TodoItem from "../components/TodoItem.tsx";

//console.log(app);



// @ts-expect-error ---
const HomePage = ({userToken}) => {
    const [todos, setTodos] = useState([]);

    const firestore = getFirestore(app);

    // Replace this with the name of the collection you're looking for
    const collectionName = userToken;

    useEffect(() => {
        const checkOrCreateCollection = async () => {
            const todoItemsArray: any[] | ((prevState: never[]) => never[]) = [];
            try {
                // Check if the collection exists by attempting to get documents from it
                const collectionRef = collection(firestore, collectionName);
                const querySnapshot = await getDocs(collectionRef);



                if (querySnapshot.empty) {
                    // If the collection does not exist, create the collection and add a document
                    const newDocRef = doc(collectionRef);

                    await setDoc(newDocRef, {
                        todo: 'Write your shit here',
                        checked: false,
                        createdAt: new Date(),
                    });

                } else {
                    const q = query(collection(firestore, collectionName));

                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data().todo);

                        todoItemsArray.push(doc.data().todo)
                    });
                }

            } catch (error) {
                console.error('Error checking or creating collection: ', error);
            } finally {
                //console.log(todoItemsArray)

                // @ts-expect-error ---
                setTodos(todoItemsArray)
            }
        };

        checkOrCreateCollection();
    }, [collectionName]);

    const inputRef = useRef<HTMLInputElement>(null);

    /*const todos = [
        'feed the cats',
        'kill the cats',
        'pet Aino on the head',
        'give Aino a kiss on the left cheek',
        'feed the cats',
        'kill the cats',
        'pet Aino on the head',
        'give Aino a kiss on the left cheek'
    ];*/

    return (
        <div className="max-w-screen-lg flex flex-col justify-center relative mx-auto">
            <div className="flex justify-center space-x-2 absolute top-[-50px] w-full">
                <input ref={inputRef} type="text" className="w-full rounded-md px-5 h-12 outline-none bg-[var(--gray-500)] text-[var(--gray-200)]" placeholder="Enter Todo" />
                <button onClick={() => {}} type="submit" className="bg-[var(--blue)] text-white px-5 rounded-md h-12 flex justify-center items-center"><span className="hidden sm:block">Add</span>
                    <img src={AddIcon} className="sm:ml-2" alt=""/></button>
            </div>


            <div className="flex flex-col w-full h-full relative">
                <div className="flex mt-14 justify-between">
                    <div className="flex flex-row w-fit">
                        <h1 className="text-[var(--blue)] font-bold text-">Tasks Created</h1>
                        <span className="bg-[var(--gray-400)] text-[var(--gray-200)] px-2 sm:px-3 rounded-2xl ml-2">0</span>
                    </div>

                    <div className="flex flex-row w-fit">
                    <h1 className="text-[var(--purple)] font-bold text-">Finished Tasks</h1>
                        <span className="bg-[var(--gray-400)] text-[var(--gray-200)] px-2 sm:px-3 rounded-2xl ml-2">0</span>
                    </div>
                </div>



                {/* If there are no todos */}
                { (todos.length == 0) ?
                <div
                    className="border-t border-t-[#333333] rounded-xl w-full flex flex-col justify-center items-center mt-5 text-center pt-20">
                    <img className="w-fit mt-30" src={clipboard} alt=""/>
                    <h1 className="text-[var(--gray-300)] mt-5">
                        You don't have any tasks registered yet<br/>
                        <span className="font-bold">Create tasks and organize your to-do items</span>
                    </h1>
                </div>

                :

                <div className="w-full flex flex-col justify-start items-center text-center overflow-y-auto overflow-x-clip h-96 absolute top-24">
                    {
                        todos.map((item, index) => {
                            return <TodoItem todoContent={item} key={index}/>
                        })
                    }

                </div>
                }
            </div>
        </div>
    )
}

export default HomePage