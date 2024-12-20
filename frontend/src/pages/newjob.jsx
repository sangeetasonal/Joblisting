import { useEffect, useState } from 'react';
import { createJob, getJobById, updateJob } from '../services'; // Ensure correct imports
import { useParams } from 'react-router-dom';

export default function NewJob() {
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();

    // Set edit mode if there is an id in the URL
    useEffect(() => {
        if (id) {
            setIsEdit(true);
        }
    }, [id]);

    const [jobformData, setJobformData] = useState({
        companyName: '',
        logoUrl: '',
        jobPosition: '',
        salary: '',
        jobType: '',
        remoteOffice: '',
        location: '',
        jobDescription: '',
        companyDescription: '',
        skills: '',
        information: '',
    });

    // Fetch job data if editing an existing job
    useEffect(() => {
        if (isEdit && id) {
            const fetchJob = async () => {
                const res = await getJobById(id);
                if (res.status === 200) {
                    const data = await res.json();
                    setJobformData(data);
                } else {
                    console.log(res);
                }
            };
            fetchJob();
        }
    }, [isEdit, id]);

    const handleCreateJob = async (e) => {
        e.preventDefault();
        const res = isEdit ? await updateJob(id, jobformData) : await createJob(jobformData);

        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setJobformData({
                companyName: '',
                logoUrl: '',
                jobPosition: '',
                salary: '',
                jobType: '',
                remoteOffice: '',
                location: '',
                jobDescription: '',
                companyDescription: '',
                skills: '',
                information: '',
            });
            alert(`Job ${isEdit ? 'updated' : 'created'} successfully`);
        } else if (res.status === 401) {
            alert('Login to create job');
        } else {
            console.log(res);
            alert('Error');
        }
    };

    return (
        <div>
            <h1>{isEdit ? 'Edit Job' : 'Create New Job'}</h1>
            <form onSubmit={handleCreateJob}>
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.companyName}
                    name="companyName"
                    placeholder="Enter company name"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.logoUrl}
                    name="logoUrl"
                    placeholder="Logo URL"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.jobPosition}
                    name="jobPosition"
                    placeholder="Enter job position"
                /><br />
                <input
                    type="number"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.salary}
                    name="salary"
                    placeholder="Enter salary"
                /><br />
                <select
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.jobType}
                    name="jobType"
                >
                    <option value="">Select job type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                    <option value="freelance">Freelance</option>
                </select><br />
                <select
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.remoteOffice}
                    name="remoteOffice"
                >
                    <option value="">Select work preference</option>
                    <option value="work from home">Work from home</option>
                    <option value="5-day-office">5-day-office</option>
                    <option value="hybrid">Hybrid</option>
                </select><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.location}
                    name="location"
                    placeholder="Enter job location"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.jobDescription}
                    name="jobDescription"
                    placeholder="Enter job description"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.companyDescription}
                    name="companyDescription"
                    placeholder="Enter company description"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.skills}
                    name="skills"
                    placeholder="Enter skills required"
                /><br />
                <input
                    type="text"
                    onChange={(e) => setJobformData({ ...jobformData, [e.target.name]: e.target.value })}
                    value={jobformData.information}
                    name="information"
                    placeholder="Enter additional information"
                /><br />

                <button type="submit">{isEdit ? 'Update Job' : 'Create Job'}</button>
            </form>
        </div>
    );
}
