import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TransunionLogo from '../../asset/transunion copy.svg';
import EquifaxLogo from '../../asset/equifax copy.svg';
import ExperianLogo from '../../asset/experian copy.svg';
import idFrontPlaceholder from '../../asset/id-front-placeholder.svg';
import idBackPlaceholder from '../../asset/id-back-placeholder.svg';
import fileIcon from '../../asset/file-icon.svg';
import { X } from 'lucide-react';

export function CreditReportUpload({ handleInputChange }) {
  const [uploadedFiles, setUploadedFiles] = useState({
    experian: null,
    equifax: null,
    transunion: null,
    identification: null,
  });

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file,
    }));
    handleInputChange({
      target: {
        name: type,
        value: file,
      },
    });
  };

  return (
    <>
      <div className="w-full max-w-[1300px] px-4 py-6">
        <div className="mb-8 bg-[#04284F] px-6 py-6 text-white sm:px-12 sm:py-8 md:px-16 md:py-10 lg:px-24">
          <h2 className="mb-2 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            Obtain current copy of Your Credit Reports
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl">
            To help us with your personalized Credit Report review, please follow these simple
            steps:
          </p>
        </div>

        {/* Step 1 */}
        <div className="flex">
          <div className="flex items-start justify-center gap-4 pt-3">
            <div className="relative h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
                1
              </div>
              <div className="absolute left-5 top-11 h-[calc(100%+2.75rem)] w-[2px] bg-[#15549A]"></div>
            </div>
          </div>
          <div className="mb-8 ml-6 w-full rounded-lg bg-[#F2F2F2] px-5 py-7 text-[#04284F]">
            <h3 className="text-2xl font-bold">Obtain Your Credit Reports</h3>
            <ul className="mt-4 space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Visit <span className="font-bold">www.AnnualCreditReport.com</span> to request
                  your free credit reports from the three major credit bureaus: Equifax, Experian,
                  and TransUnion.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Follow the instructions on the website to download your reports. If possible,
                  obtain reports from all three bureaus for the most comprehensive assessment.
                </span>
              </li>
            </ul>
            <button className="ml-8 mt-7 rounded-lg bg-[#15549A] px-4 py-4 text-xl text-white">
              <Link
                to="https://www.annualcreditreport.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.AnnualCreditReport.com
              </Link>
            </button>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex">
          <div className="flex items-start justify-center gap-4 pt-16">
            <div className="relative h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
                2
              </div>
              <div className="absolute left-5 top-11 h-[calc(100%+0.5rem)] w-[2px] bg-[#15549A]"></div>
            </div>
          </div>

          <div className="mb-8 ml-6">
            <div className="mb-8 rounded-lg bg-[#04284F] px-24 py-10 text-white">
              <h2 className="mb-2 text-center text-3xl font-bold">
                Upload Your Credit Reports and identification
              </h2>
              <p className="text-center text-2xl">
                Your credit Repair jurney Starts Todays - Upload Your Credit Report & ID to Begin
              </p>
            </div>
            <div className="w-full rounded-lg bg-[#F2F2F2] px-5 py-7 text-[#04284F]">
              <h3 className="text-2xl font-bold">Upload Your Reports to Our System</h3>
              <ul className="mt-3 text-lg">
                <li className="mb-2 flex items-start">
                  <span className="mr-2 text-2xl">•</span>
                  <span>
                    Once you&apos;ve obtained your credit reports, upload them to our secure system
                    using the upload feature below.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl">•</span>
                  <span>A minimum of 2 reports are required to start the assessment process</span>
                </li>
              </ul>

              {/* Upload boxes */}
              <div className="mt-6 space-y-4">
                {/* Experian Upload */}
                <div className="flex w-[600px] rounded-lg border-2 border-[#15549A] bg-[#E4E4E4]">
                  <div className="flex w-1/2 items-center p-3">
                    <span className="text-xl font-semibold text-[#04284F]">Upload</span>
                    <img src={ExperianLogo} alt="Experian" className="ml-4 h-10" />
                  </div>
                  <div className="w-1/2 rounded-lg bg-[#F5F5F5]">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={e => handleFileUpload(e, 'experian')}
                      className="hidden"
                      id="experian-upload"
                    />
                    <label
                      htmlFor="experian-upload"
                      className="flex h-full cursor-pointer items-center"
                    >
                      <span className="flex items-center rounded px-2 py-2">
                        <img src={fileIcon} alt="File Icon" className="h-6 px-2" />
                        <p className="text-xl">Browse</p>
                      </span>
                      <span className="ml-3 text-base text-gray-500">
                        {uploadedFiles.experian ? uploadedFiles.experian.name : 'File name....'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Equifax Upload */}
                <div className="flex w-[600px] rounded-lg border-2 border-[#15549A] bg-[#E4E4E4]">
                  <div className="flex w-1/2 items-center p-3">
                    <span className="text-xl font-semibold text-[#04284F]">Upload</span>
                    <img src={EquifaxLogo} alt="Equifax" className="ml-4 h-9" />
                  </div>
                  <div className="w-1/2 rounded-lg bg-[#F5F5F5]">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={e => handleFileUpload(e, 'equifax')}
                      className="hidden"
                      id="equifax-upload"
                    />
                    <label
                      htmlFor="equifax-upload"
                      className="flex h-full cursor-pointer items-center"
                    >
                      <span className="flex items-center rounded px-2 py-2">
                        <img src={fileIcon} alt="File Icon" className="h-6 px-2" />
                        <p className="text-xl">Browse</p>
                      </span>
                      <span className="ml-3 text-base text-gray-500">
                        {uploadedFiles.equifax ? uploadedFiles.equifax.name : 'File name....'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* TransUnion Upload */}
                <div className="flex w-[600px] rounded-lg border-2 border-[#15549A] bg-[#E4E4E4]">
                  <div className="flex w-1/2 items-center p-3">
                    <span className="text-xl font-semibold text-[#04284F]">Upload</span>
                    <img src={TransunionLogo} alt="TransUnion" className="ml-4 h-10" />
                  </div>
                  <div className="w-1/2 rounded-lg bg-[#F5F5F5]">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={e => handleFileUpload(e, 'transunion')}
                      className="hidden"
                      id="transunion-upload"
                    />
                    <label
                      htmlFor="transunion-upload"
                      className="flex h-full cursor-pointer items-center"
                    >
                      <span className="flex items-center rounded px-2 py-2">
                        <img src={fileIcon} alt="File Icon" className="h-6 px-2" />
                        <p className="text-xl">Browse</p>
                      </span>
                      <span className="ml-3 text-base text-gray-500">
                        {uploadedFiles.transunion ? uploadedFiles.transunion.name : 'File name....'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* ID Upload */}
                <div className="mt-8">
                  <div className="flex gap-8">
                    {/* Upload Inputs Section */}
                    <div className="mt-5 flex-1 items-center justify-center space-x-4">
                      <h4 className="mb-4 text-3xl text-[#04284F]">
                        Upload your driving license for your identity
                      </h4>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={e => handleFileUpload(e, 'identificationFront')}
                        className="w-2/5 rounded-lg border border-[#15549A] bg-white p-3"
                        placeholder="Upload Front Side"
                      />
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={e => handleFileUpload(e, 'identificationBack')}
                        className="ml-2 w-2/5 rounded-lg border border-[#15549A] bg-white p-3"
                        placeholder="Upload Back Side"
                      />
                    </div>
                    {/* Preview Images Section */}
                    <div className="flex gap-8">
                      <div className="w-[180px]">
                        <div className="h-[118px] w-[177px] overflow-hidden rounded-lg border border-[#15549A] bg-white">
                          {uploadedFiles.identificationFront ? (
                            <img
                              src={URL.createObjectURL(uploadedFiles.identificationFront)}
                              alt="ID Front Preview"
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <img
                              src={idFrontPlaceholder}
                              alt="ID Front Sample"
                              className="h-full w-full"
                            />
                          )}
                        </div>
                        <button className="mt-2 h-[39px] w-[180px] rounded-[5px] border border-[#15549A] bg-[#15549A] text-sm text-white">
                          Click here to Preview
                        </button>
                      </div>
                      <div className="w-[180px]">
                        <div className="h-[118px] w-[177px] overflow-hidden rounded-lg border border-[#15549A] bg-white">
                          {uploadedFiles.identificationBack ? (
                            <img
                              src={URL.createObjectURL(uploadedFiles.identificationBack)}
                              alt="ID Back Preview"
                              className="h-full w-full object-contain"
                            />
                          ) : (
                            <img
                              src={idBackPlaceholder}
                              alt="ID Back Sample"
                              className="h-full w-full"
                            />
                          )}
                        </div>
                        <button className="mt-2 h-[39px] w-[180px] rounded-[5px] border border-[#15549A] bg-[#15549A] text-sm text-white">
                          Click here to Preview
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-start gap-2 lg:mt-8">
                    <input
                      type="checkbox"
                      className="peer relative mt-1 h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-[#04284F] bg-[#F2F2F2] checked:bg-[#04284F]"
                    />
                    <p className="w-full text-xl text-[#04284F] lg:text-nowrap">
                      By selecting here are consenting to the term and agreement for EZECreditRepair
                      to represent and work for you
                      <span className="ml-1 cursor-pointer font-bold text-[#15549A] underline underline-offset-4">
                        Read More
                      </span>
                    </p>
                  </div>
                  {/* Consent Section */}
                  <div className="mt-8 w-full">
                    <div className="flex items-center justify-center bg-[#15549A] px-6 py-4 text-center text-white">
                      <h3 className="text-2xl font-bold">CONSENT & LIMITED POWER OF ATTORNEY</h3>
                      <button className="absolute right-44 flex h-9 w-9 items-center justify-center rounded-full bg-white text-center text-3xl font-bold text-[#15549A]">
                        <X />
                      </button>
                    </div>

                    <div className="mt-4 text-lg">
                      <p className="mb-2 text-center text-2xl font-semibold text-[#333333]">
                        By checking the box on our application form that states:
                      </p>

                      <div className="mb-4 text-[#333333]">
                        &quot;By checking this box, I certify that I am at least 19 years of age,
                        acknowledge that I have read the provided Contract, Information Statement,
                        and Legal Disclosures, and give my Electronic Signature and Limited Power of
                        Attorney to EzeCredit Repair to perform work on my behalf.&quot;
                      </div>

                      <p className="mb-4 text-[#333333]">
                        you are representing and agreeing that you accept all terms and conditions
                        as if you had physically provided your signature.
                      </p>

                      <div className="mb-4">
                        <h4 className="font-bold text-[#333333]">LIMITED POWER OF ATTORNEY</h4>
                        <p className="text-[#333333]">
                          This Limited Power of Attorney grants EzeCredit Repair permission to act
                          as your authorized agent for the sole purpose of assisting in your credit
                          repair process. This includes writing, signing, and submitting
                          correspondence to credit bureaus, creditors, or other relevant entities as
                          deemed necessary under this agreement.
                        </p>
                      </div>

                      <p className="mb-6 text-[#333333]">
                        You may revoke your Electronic Signature and Limited Power of Attorney at
                        any time by sending EzeCredit Repair an email stating your intent to
                        withdraw your authorization. Upon revocation, EzeCredit Repair will no
                        longer have the authority to represent you, and this agreement will be
                        considered terminated.
                      </p>

                      <div className="pt-4">
                        <input
                          type="text"
                          placeholder="Your Signature"
                          className="w-1/4 rounded-lg border border-[#15549A] bg-white p-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Step 3 - Why This Is Important */}
        <div className="flex">
          <div className="flex items-start justify-center gap-4 pt-3">
            <div className="relative h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#15549A] text-2xl font-bold text-white">
                3
              </div>
            </div>
          </div>
          <div className="mb-8 ml-6 w-full rounded-lg bg-[#F2F2F2] px-5 py-7">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-[#04284F]">Why This is Important</h3>
            </div>
            <div className="mt-4 flex items-start gap-2">
              <span className="text-[#04284F]">•</span>
              <p className="text-lg text-[#04284F]">
                By analyzing your credit reports, we can establish a baseline and identify any
                inaccuracies or questionable items. This step is essential to crafting your
                personalized credit repair strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        {/* Submit Documents Section */}
        <div className="w-full bg-[#15549A] px-8 py-10 text-center text-white">
          <h2 className="mb-2z text-3xl font-bold">SUBMIT & UPLOAD YOUR DOCUMENTS</h2>
          <p className="mb-6 text-2xl">
            Click the Upload button below to securely submit your credit reports and verification
            details
            <br />
            Ensure the files are in PDF format for easy processing.
          </p>
          <button className="rounded-lg bg-[#EDEDED] px-6 py-2 text-2xl font-semibold text-[#15549A]">
            Submit Documents
          </button>
        </div>
        {/* Support Message */}
        <div className="mt-12 text-center text-xl text-[#04284F]">
          <p>
            If you encounter any issues while obtaining or uploading your reports, feel free to
            contact our support team for assistance.
            <br />
            We&apos;re here to guide you every step of the way!
          </p>
        </div>
      </div>
    </>
  );
}

CreditReportUpload.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
