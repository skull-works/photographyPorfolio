import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import Albert1 from '../../images/bio/albert1.png';

const Bio = () => {
    return ( 
        <div className='w-full h-100vh overflow-y-auto bg-darkyellow'>
            <title>BIO | Gualbertsan Sual</title>
            <header className='h-12vh'>
                <Navbar showGual={true} />
            </header>
            <main className='content'>
                <div className='w-full xs:w-10/12 xs:mx-auto mt-10 bg-red-200 flex flex-col md:flex-row'>
                    <div className='w-6/12 pt-50vh mt-10 mx-auto relative bg-green-400'>
                        <img className='absolute top-0 left-0 object-cover w-full h-full' src={Albert1} alt="albert1" />
                    </div>
                    <div className='w-10/12 xs:w-full md:w-6/12 mt-10 md:mt-10 mx-auto relative bg-red-300'>
                        <p className='ml-4 text-xs lg:text-sm font-Cinzel'>
                            Passion is something that you love doing. It is liking
                            what you do and liking how you do it. It differentiates
                            between work and career. Working hard for something
                            that does not interest you and working for something
                            that you love are two different things. Passion, for
                            Gualbertsan Dela Torre Sual, turned out to be something
                            that pushed him closer to his dreams in life.
                        </p>
                        <br />
                        <p className='ml-4 text-xs lg:text-sm font-Cinzel'>
                            Gualbertsan or “Albert” is a student of Multimedia Arts
                            with a specialization in Filmmaking at Asia Pacific College.
                            He is a photojournalist for the RAMpage which is the
                            official newsletter of APC. He is a freelance graphic
                            designer, photographer, and former intern at Informatics
                            Computer Institute. In 2018, he was part of RESBAK-
                            filmmakers of the University of the Philippines in one of
                            their events. He also graduated with honors and a
                            leadership award. He has a diploma in Multimedia Arts &
                            Technology from Informatics International College. He
                            has worked over a dozen film collections throughout his
                            career and directed several short films at Asia Pacific
                            College just like “Kwaderno,” a film about Education, which
                            was shown during the Merge 2019 at SM Mall of Asia. He has
                            conducted three art seminars for the youth in 2017.
                        </p>
                    </div>
                </div>
                <div className='w-full xs:w-10/12 xs:mx-auto bg-red-200'>
                    <div className='w-10/12 xs:w-full mt-4 mx-auto relative bg-yellow-300'>
                        <p className='text-xs font-Cinzel'>
                            Before becoming a student of APC, Gualbertsan previously worked as a call center agent during the first half of 2017.
                            He was employed in a well-known company and was earning well. However, it was also during this time when he felt so
                            much dullness and dissatisfaction in his life. “I wasn’t given a chance to live with what I felt I deserved; I was stuck in
                            the monotony of routine, unable to extricate myself from that situation,” he said in an interview. Gualbertsan, being
                            creative at heart, took a bold step to pursue his artistic endeavors and decided to continue his education at APC to
                            specialize in filmmaking.
                        </p>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default Bio;