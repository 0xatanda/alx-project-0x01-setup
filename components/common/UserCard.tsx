import { UserProps } from "../../interface"

const UserCard: React.FC<UserProps> =  ({name, email,phone, website, address}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hov er:shadow-xl transition-shadow duration-300">
            <div  className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            </div>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Website: {website}</p>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Street: {address.street}</p>
                <p className="text-gray-600">City: {address.city}</p>
                <p className="text-gray-600">Zipcode: {address.zipcode}</p>
            </div>
        </div> 
    )
}


export default UserCard;