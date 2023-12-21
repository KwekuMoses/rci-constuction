import React from 'react';
import Image from 'next/image';
import Title from '@/components/title/Title';
import Link from 'next/link';
import { fetchProjectsData } from '@/api/wordpress/api';
import './style.scss';

interface Project {
    title: {
        rendered: string;
    };
    acf: {
        projects: {
            featured_image: string;
        };
    };
    slug: string
    id: number
}

type ProjectsData = Project[];

const Page = async () => {
    const projectsData: ProjectsData = await fetchProjectsData();

    return (
        <div className="Projects">
            <div className="Projects__Title">
                <Title title="Våra projekt" />
            </div>

            <div className="Projects__Wrapper">
                {projectsData.map((project) => (
                    project.acf && project.acf.projects && project.acf.projects.featured_image ? (
                        <Link href={`/vara-projekt/${project.slug}`} key={project.id}>
                            <div className="Projects__Project">
                                <div className="Projects__ImageWrapper">
                                    <Image
                                        className="Projects__ProjectImage"
                                        src={project.acf.projects.featured_image}
                                        alt={project.title.rendered}
                                        fill={true}
                                        style={{ objectFit: "cover" }}
                                        priority={true}
                                    />
                                </div>
                                <div className="Projects__ProjectTitle">
                                    <h2> {project.title.rendered} </h2>
                                </div>

                            </div>
                        </Link>
                    ) : null
                ))
                }
            </div>
        </div>
    );
};

export default Page;
