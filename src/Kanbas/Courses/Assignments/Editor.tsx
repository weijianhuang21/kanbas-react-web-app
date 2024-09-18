export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br />
            <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br />

            <br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
                Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                        </select>
                    </td>
                </tr>

                <br />


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                        </select>
                    </td>
                </tr>

                <br />

                <tr>
                    <td> </td>

                    <td align="left" valign="top">
                        <label >Online Entry Options</label><br />

                        <input type="checkbox" name="check-option" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-option" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-option" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-option" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-option" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>

                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone" /><br />
                        <br />
                        <label htmlFor="wd-due-date">Due Date</label><br />
                        <input type="date" id="wd-due-date" value="2021-05-20" /><br />
                        <br />
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-from">Available From</label><br />
                            <input type="date" id="wd-available-from" value="2021-05-20" />
                        </td>
                        <td align="left" valign="top">
                            <label htmlFor="wd-available-until">Available Until</label><br />

                            <input type="date" id="wd-available-until" value="2021-05-27" />
                        </td>
                    </td>

                </tr>

            </table>
        </div>
    );
}

