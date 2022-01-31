import { db, auth } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import React, { createContext, useEffect, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function loadingUser(){
            const isUser = localStorage.getItem('user-p');

            if(isUser){
                setUser(JSON.parse(isUser));
            }
        }

        loadingUser();
    }, []);

    const storageUser = useCallback((data) => {
        localStorage.setItem('user-p', JSON.stringify(data));
    }, []);

    const signIn = useCallback((email, password) => {
        async function requestLogin(email, password){
            setLoadingAuth(true);
            await signInWithEmailAndPassword(auth, email, password).then(async (value) => {
                let uid = value.user.uid;
                await getDoc(doc(db, `users-p/${uid}`)).then((snapchat) => {
                    let data = {
                        uid: uid,
                        name: snapchat.data().name,
                        email: snapchat.data().email,
                        gender: snapchat.data().gender
                    }

                    setUser(data);
                    storageUser(data);
                    toast.success(`Bem vindo de volta, ${data.name}`);
                }).catch((error) => {
                    toast.error(error);
                })
            }).catch((error) => {
                toast.error(error);
            })

            setLoadingAuth(false);
        }
        requestLogin(email, password);

    }, [storageUser]);

    const signUp = useCallback((name, email, password, gender) => {
        async function requestRegister(name, email, password, gender){
            setLoadingAuth(true);
            await createUserWithEmailAndPassword(auth, email, password).then(async (value) => {
                let uid = value.user.uid;
                await setDoc(doc(db, `users-p/${uid}`), {
                    uid,
                    name,
                    email,
                    gender
                }).then(() => {
                    let data = {
                        uid,
                        name,
                        email,
                        gender
                    }

                    setUser(data);
                    storageUser(data);
                    toast.success(`Bem vindo de volta, ${data.name}`);
                }).catch((error) => {
                    toast.error(error);
                })
            }).catch((error) => {
                toast.error(error);
            })

            setLoadingAuth(false);
        }
        requestRegister(name, email, password, gender);

    }, [storageUser]);

    const logout = useCallback(() => {
        async function logoutUser(){
            await signOut(auth);
            toast.success('Saindo da plataforma...');
            localStorage.removeItem('user-p');
            setUser(null);
        }

        logoutUser();
    }, [])

    return(
        <AuthContext.Provider value={{signed: !!user, user, logout, signIn, signUp, loadingAuth}}>
            { children }
        </AuthContext.Provider>
    )

}