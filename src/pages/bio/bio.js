import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import Albert1 from '../../images/bio/albert1.png';
import Albert2 from '../../images/bio/albert2.png';
import Logo from '../../images/LOGO2.png';
import Icons from '../../images/icons.png';


const Bio = () => {
    return ( 
        <div className='w-full h-100vh overflow-y-auto albert-color-100'>
            <title>BIO | Gualbertsan Sual</title>
            <header className='h-12vh'>
                <Navbar showGual={true} isRegNav={true} />
            </header>
            <main className='content text-gray-200 text-xs sm:text-base font-Raleway'>
                <div className='w-full xs:w-10/12 xs:mx-auto mt-10 flex flex-col md:flex-row'>
                    <div className='w-6/12 pt-40vh xs:pt-60vh md:pt-80vh mt-10 md:mt-0 mx-auto relative'>
                        <img className='absolute top-0 left-0 object-contain w-full h-full' src={Albert1} alt="albert1" />
                    </div>
                    <div className='w-10/12 xs:w-full md:w-6/12 mt-10 md:mt-0 mx-auto relative albert-color-200'>
                        <p className='sm:ml-4 md:mt-10vh lg:mt-4'>
                            Passion is something that you love doing. It is liking
                            what you do and liking how you do it. It differentiates
                            between work and career. Working hard for something
                            that does not interest you and working for something
                            that you love are two different things. Passion, for
                            Gualbertsan Dela Torre Sual, turned out to be something
                            that pushed him closer to his dreams in life.
                        </p>
                        <br />
                        {/* 2nd paragraph */}
                        {/* md show */}
                        <p className='sm:ml-4 hidden md:block lg:hidden'>
                            Gualbertsan or “Albert” is a student of Multimedia Arts
                            with a specialization in Filmmaking at Asia Pacific College.
                            He is a photojournalist for the RAMpage which is the
                            official newsletter of APC. He is a freelance graphic
                            designer, photographer, and former intern at Informatics
                            Computer Institute.
                        </p>
                        {/* lg show */}
                        <p className='sm:ml-4 hidden lg:block'>
                            Gualbertsan or “Albert” is a student of Multimedia Arts
                            with a specialization in Filmmaking at Asia Pacific College.
                            He is a photojournalist for the RAMpage which is the
                            official newsletter of APC. He is a freelance graphic
                            designer, photographer, and former intern at Informatics
                            Computer Institute. In 2018, he was part of RESBAK-
                            filmmakers of the University of the Philippines in one of
                            their events. He also graduated with honors and a
                            leadership award. He has a diploma in Multimedia Arts &
                            Technology from Informatics International College.
                        </p>
                        {/* sm show */}
                        <p className='sm:ml-4 md:hidden'>
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
                <div className='w-full xs:w-10/12 xs:mx-auto albert-color-200'>
                    <div className='w-10/12 xs:w-full mt-4 mx-auto relative'>
                        {/* 2nd paragraph */}
                        {/* md show */}
                        <p className='hidden md:block lg:hidden'>
                            In 2018, he was part of RESBAK-
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
                        {/* lg show */}
                        <p className='hidden lg:block'>
                            He has worked over a dozen film collections throughout his
                            career and directed several short films at Asia Pacific
                            College just like “Kwaderno,” a film about Education, which
                            was shown during the Merge 2019 at SM Mall of Asia. He has
                            conducted three art seminars for the youth in 2017.
                        </p>
                        <br />
                        <p>
                            Before becoming a student of APC, Gualbertsan previously worked as a call center agent during the first half of 2017.
                            He was employed in a well-known company and was earning well. However, it was also during this time when he felt so
                            much dullness and dissatisfaction in his life. “I wasn’t given a chance to live with what I felt I deserved; I was stuck in
                            the monotony of routine, unable to extricate myself from that situation,” he said in an interview. Gualbertsan, being
                            creative at heart, took a bold step to pursue his artistic endeavors and decided to continue his education at APC to
                            specialize in filmmaking.
                        </p>
                    </div>
                </div>

                {/* 2nd Part */}
                <div className='w-full xs:w-10/12 xs:mx-auto albert-color-200'>
                    <div className='w-full xs:mx-auto mt-10 flex flex-col md:flex-row-reverse'>
                        <div className='w-8/12 lg:w-4/12 pt-40vh xs:pt-50vh lg:pt-70vh mt-10 mx-auto relative'>
                            <img className='absolute top-0 right-0 object-contain sm:object-contain w-full h-full' src={Albert2} alt="albert1" />
                        </div>
                        <div className='w-10/12 xs:w-full lg:w-8/12 mt-4 md:mt-10 mx-auto relative'>
                            <p>
                                Since 2012, he has been certain about what he aspires to do
                                in life–that is to create films and become a great filmmaker.
                                The Filipino screenwriter and director, Raz Dela Torre,
                                played a huge influence on how he developed his dream.
                                For Gualbertsan, filmmaking is not just another profession.
                                He sees it as a form of self-expression, a medium for
                                communication, and simply as an enjoyable pursuit. Th
                                bizarreness of his surroundings fires up his imagination
                                and supplies him with excitement. He hankers to translat
                                these ideas and zeal into a form of art, particularly into
                                a film.
                            </p>
                            <br />
                            <p>
                                He is fond of creating short clips about what he feels.
                                He uses his own emotions in relaying the message that he
                                wants to tell. One of his works was about the sentiments
                                of a desperate man who was left all alone by the person
                                whom he needed the most – not his lover nor his mother,
                                but his thesis partner. It was a quirky and creative mimicry
                                of a typical student’s struggle and is relatable to those
                                who always carry the burdens of every group work. The
                                clip was posted on his Facebook account and has garnered
                                laughs and praises from people online.
                            </p>
                            <br />
                            <p className='hidden lg:block'>
                                Apart from creating short clips as a way to express his
                                sentiments, he also directs films which aim to communicate
                                stories of significance. One of his recent works, Kwaderno,
                                is a tale of an imaginative child who isn’t fortunate
                                enough to attend school yet strives to find a way to learn.
                        </p>
                        </div>
                    </div>
                    <div className='w-10/12 xs:w-full mt-4 mx-auto relative'>
                        <br />
                        <p className='lg:hidden'>
                            Apart from creating short clips as a way to express his
                            sentiments, he also directs films which aim to communicate
                            stories of significance. One of his recent works, Kwaderno,
                            is a tale of an imaginative child who isn’t fortunate
                            enough to attend school yet strives to find a way to learn.
                        </p>
                        <p>
                            The film advocates the right of every child to have access to education regardless of their social status. He wants his
                            films to inspire and inform viewers about the prevalent issues in society that are often being talked about. Last July 2019,
                            he was invited to showcase this film during the State of the Youth Address 2019 of the Southern Tagalog Youth Parliament.
                            It was held at the University of the Philippines Los Banos – College of Arts and Sciences (UPLB-CAS) auditorium where he was
                            also the guest speaker. He talked about human rights and the importance of education along with other distinguished
                            personalities, namely Sarah Elago, Bryan Ezon Gonzales, and Samira Gutoc.
                        </p>
                        <br />
                        <p>
                            He found his passion for weaving stories that are inspired by his circumstances, relationships, and the people around him.
                            “I vent my feelings out through film and tell myself that everything will be alright,” he said. He finds peace and comfort
                            whenever he expresses himself through his chosen craft. Truly, it is important to find an avenue to share and express oneself.
                            For Gualbertsan, he found his outlet through the art of filmmaking; in crafting stories, capturing people’s emotions, and
                            captivating the souls of his audience.
                        </p>
                        <br />
                        <p>
                            The story of this talented young man vividly reflects the values of courage and determination. Gualbertsan braved to
                            follow and continue his long-time dream and persevered to slowly build a name for himself. He was asked this question:
                            “What does it feel like to become a filmmaker?” He said, “It feels as if I can do whatever I want.” Following the trail of his passion
                            allowed him to feel limitless and attain a sense of fulfillment. Indeed, nothing is more rewarding than going after what your
                            heart desires while connecting to the hearts of others at the same time.
                        </p>
                        <br />
                        <p>
                            Written by: Sharmaine Joyce Alilin and Kamille Pangantihon
                        </p>
                    </div>
                </div>
            </main>
            <footer className='w-full'>
                <div className='w-16vh mt-8 pt-20vh relative mx-auto'>
                    <img className='absolute top-0 right-0 object-contain sm:object-contain w-full h-full' src={Logo} alt="Logo" />
                </div>
                <div className='w-2/12 pt-6 relative mx-auto'>
                    <img className='absolute top-0 right-0 object-contain sm:object-contain w-full h-full' src={Icons} alt="media_icons" />
                </div>
                <div className='w-8/12 pt-4 pb-20 relative mx-auto'>
                    <ul className='font-Raleway text-sm albert-color-200  text-xss md:text-xs text-center leading-tight'>
                        <li>
                            2020 - 2021 <span className="text-xs">©</span> Gualbertsan Sual. All rights reserved
                        </li>
                        <li>
                            Site by Marco Butalid
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
     );
}
 
export default Bio;